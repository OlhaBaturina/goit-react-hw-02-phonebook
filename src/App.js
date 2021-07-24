import React, { Component } from "react";
import Form from "./Components/ContactForm/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./Components//ContactList/ContactList";
import Filter from "./Components/FilterContacts/FilterContats";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  submitForm = ({ name, number }) => {
    this.addContact(name, number);
    console.log({ name, number });
  };

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      filter: "",
    };

    this.state.contacts.find((contact) => name === contact.name) &&
      toast.error(`${name} is already in contacts`);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  showContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => name.includes(filter));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Form onSubmit={this.submitForm} />
        <ToastContainer />
        {contacts.length >= 2 && (
          <Filter value={filter} onFilterChange={this.handleFilterChange} />
        )}
        {}
        <ContactList
          contacts={this.showContact()}
          onDeleteContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
