import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { Wrapper, List, Title } from "./ContactList.js";
import { Filter } from "../Filter/Filter.jsx";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage.jsx";
import { Container } from "../Container/Container.jsx";
import { RestoreButton } from "../RestoreButton/RestoreButton.jsx";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const allContacts = useSelector((state) => state.contacts.contacts);
  const lastDeletedContact = useSelector(
    (state) => state.contacts.lastDeletedContact
  );
  const filter = useSelector((state) => state.filter);

  const contacts = filter
    ? allContacts.filter((cont) =>
        cont.name.toLowerCase().includes(filter.toLowerCase())
      )
    : allContacts;

  return (
    <Container>
      <Wrapper>
        <Title>Your Contacts</Title>
        <Filter />
        {contacts.length === 0 ? (
          <EmptyMessage />
        ) : (
          <List>
            {contacts.map((cont) => (
              <ContactItem
                key={cont.id}
                id={cont.id}
                name={cont.name}
                number={cont.number}
              />
            ))}
          </List>
        )}
        {lastDeletedContact && <RestoreButton />}
      </Wrapper>
    </Container>
  );
};
