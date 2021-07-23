// import Counter from "./Components/Counter/Counter";
import React, { Component } from "react";
import Form from "./Components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  render() {
    return <Form />;
  }
}

export default App;
