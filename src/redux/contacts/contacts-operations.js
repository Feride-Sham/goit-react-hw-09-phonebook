import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }

  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch((error) => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, number }) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }

  // axios
  //   .post("/contacts", contact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }

  // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(() => dispatch(deleteContactSuccess(contactId)))
  //   .catch((error) => dispatch(deleteContactError(error)));
};

export default { fetchContacts, addContact, deleteContact };
