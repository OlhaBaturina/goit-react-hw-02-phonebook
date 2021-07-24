import React from "react";
import PropTypes from "prop-types";
// import './ContactList.css';
import ListItem from "../ListItem/ListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2 className="Heading">Contacts</h2>

      <ul className="ContactList">
        {contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};

export default ContactList;
