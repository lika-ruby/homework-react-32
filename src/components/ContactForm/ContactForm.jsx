import { Form, Labels, Label, Input, Button } from "./ContactForm.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const nameValue = e.target.name;
    if (nameValue === "name") {
      setName(e.target.value);
    } else {
      if (nameValue === "number") {
        setNumber(e.target.value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Labels>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я]+)?)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Elis Cupper"
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="^\+?[0-9\s\-]{5,20}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="5423-423-647"
            required
          />
        </Label>
      </Labels>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
