import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ListContacts.module.css";
import Form from "../ContactForm/ContactForm";

class List extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  // contactsId = uuidv4();
  // numberId = uuidv4();

  //   handleNameChange = (e) => {
  //     const { name, value } = e.currentTarget;
  //     this.setState({ [name]: value });
  //   };

  //   renderList = () => {
  //   return this.props.onSubmit(this.state);

  //   };

  // reset = () =>{
  //     this.setState( { name: "",
  //     number: "",})
  // }

  //   render() {
  //     return (
  //        <ul>
  //        Contacts
  //        {this.props.onSubmit()}
  //        <li className={s.list}></li>
  //        </ul>
  //     );
  //   }
}

export default List;
