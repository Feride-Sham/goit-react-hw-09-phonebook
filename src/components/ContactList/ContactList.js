import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import s from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactsSelectors.getFilteredContacts);
  const isLaodingContacts = useSelector(contactsSelectors.getIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (id) => {
    dispatch(contactsOperations.deleteContact(id), []);
  };

  return (
    <>
      {isLaodingContacts && <h1>Loading..</h1>}
      <ul className={s.list}>
        {contactList.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p>{name}: </p> <p>{number}</p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
