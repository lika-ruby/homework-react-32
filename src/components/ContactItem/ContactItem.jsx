import { Item, Text, Number, Button } from "./ContactItem";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item id={id}>
      <Text>
        {name}:<Number>{number}</Number>
      </Text>
      <Button type="button" onClick={handleDelete}>
        ✖
      </Button>
    </Item>
  );
};
