import { useState, useRef, useEffect } from "react";
import { createContext } from "react";
import { nanoid } from "nanoid";

export const ContactsContext = createContext(null);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const lastDeletedContacts = useRef("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    } else {
      localStorage.setItem(
        "contacts",
        JSON.stringify([
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ])
      );
    }
  }, []);

  const setNewFilter = (value) => {
    setFilter(value);
  };

  const filterNumber = () => {
    if (!filter) return contacts;

    const text = filter.toLowerCase();
    return contacts.filter((cont) => cont.name.toLowerCase().includes(text));
  };

  const addNumber = ({ name, number }) => {
    if (contacts.find((cont) => cont.name === name)) {
      alert(`Number ${name} is already in contacts`);
      return;
    }

    if (contacts.find((cont) => cont.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    setContacts([...contacts, { id: nanoid(8), name: name, number: number }]);
  };

  const deleteNumber = (e) => {
    setContacts(
      contacts.filter((cont) => e.target.parentElement.id !== cont.id)
    );
    lastDeletedContacts.current = contacts.find(
      (cont) => e.target.parentElement.id === cont.id
    );
  };

  const restoreNumber = (e) => {
    setContacts([...contacts, lastDeletedContacts.current]);
    lastDeletedContacts.current = null;
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filter,
        setNewFilter,
        filterNumber,
        addNumber,
        deleteNumber,
        lastDeletedContacts,
        restoreNumber,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
