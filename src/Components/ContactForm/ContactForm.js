import React, { Component } from "react";
import s from "./ContactForm.module.css";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = (e) => {
    console.log(e.currentTarget.value);
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
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleNameChange}
              className={s.input}
            />
          </label>

          <button className={s.button}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
