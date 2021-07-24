import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  contactsId = uuidv4();
  numberId = uuidv4();

  handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <h2 className={s.name}>Phonebook</h2>
        <form className={s.thumb} onSubmit={this.submitForm}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              id={this.contactsId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={this.state.name}
              onChange={this.handleNameChange}
              required
              className={s.input}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              id={this.numberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleNameChange}
              className={s.input}
            />
          </label>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
