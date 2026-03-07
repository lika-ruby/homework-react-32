import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { Wrapper, List, Title } from "./ContactList.js";
import { Filter } from "../Filter/Filter.jsx";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage.jsx";
import { Container } from "../Container/Container.jsx";

import { RestoreButton } from "../RestoreButton/RestoreButton.jsx";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contactsState = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  if (!contactsState || !contactsState.contacts) {
    return null;
  }

  const lastDeletedContact = contactsState.lastDeletedContact;

  const contacts = filter
    ? contactsState.contacts.filter((c) =>
        c.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactsState.contacts;

  return (
    <Container>
      <Wrapper>
        <Title>Your Contacts</Title>
        <Filter />
        {contacts.length === 0 ? (
          <EmptyMessage />
        ) : (
          <List>
            {contacts.map((c) => (
              <ContactItem
                key={c.id}
                id={c.id}
                name={c.name}
                number={c.number}
              />
            ))}
          </List>
        )}
        {lastDeletedContact && <RestoreButton />}
      </Wrapper>
    </Container>
  );
};
