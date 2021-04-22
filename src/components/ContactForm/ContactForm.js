import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

import s from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.getAllContacts);

  // записывает данные введенные в форме
  const handleInputChange = useCallback((ev) => {
    const { name, value } = ev.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.error("Ooops");
    }
  }, []);

  // отправляет данные введеные в форме
  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      const uniqueContact = contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      if (uniqueContact) {
        alert(`${name} уже есть в списке ваших контактов`);
        return;
      }

      dispatch(contactsOperations.addContact({ name, number }));
      resetForm();
    },
    [dispatch, name, number]
  );

  // очищает форму после отправки
  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.formInput}
        />
      </label>
      <label className={s.label}>
        Phone
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          className={s.formInput}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
