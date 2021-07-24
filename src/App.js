// import Counter from "./Components/Counter/Counter";
import React, { Component } from "react";
import Form from "./Components/ContactForm/ContactForm";
// import List from './Components/ListContacts/ListContacts'

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  submitForm = (data) => {
    //   const contact = {};
    // contact.name = data.name;
    // contact.number = data.number;
    // contact.push(this.state.contacts);
    console.log(data);
    // return this.state.contacts;
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitForm} />
        {/* <List onSubmit={this.submitForm}/> */}
      </>
    );
  }
}

export default App;
