import React from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

const ContactsView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
