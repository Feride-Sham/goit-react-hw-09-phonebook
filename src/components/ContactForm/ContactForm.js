import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // записывает данные введенные в форме
  handleInputChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  // отправляет данные введеные в форме
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    const uniqueContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (uniqueContact) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  // очищает форму после отправки
  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.container} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
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
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
