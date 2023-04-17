import React, { useState } from "react";

import image from "./utils/img_avatar.png";
import { validateFormData } from "./utils/error";

import "./styles.css";

const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  searchQuery: "",
};

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    const { firstName, lastName, email } = formData;
    const newId = Math.floor(Math.random() * 1000000);

    const newContact = {
      firstName,
      lastName,
      email,
      id: newId,
    };
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormData(defaultFormData);
      setContacts([...contacts, newContact]);
      setErrors({});
    }
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, searchQuery: value });
  };
  const contactSearch = (contact, searchFields) => {
    return searchFields.some((field) => {
      return contact[field]
        .toLowerCase()
        .includes(formData.searchQuery.toLowerCase());
    });
  };

  const filteredContacts = contacts.filter((contact) => {
    return contactSearch(contact, ["firstName", "lastName", "email"]);
  });

  return (
    <div className="ContactForm">
      <div className="search-div">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={formData.searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            name="firstName"
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            name="lastName"
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <button type="submit">Create</button>
      </form>

      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <img src={image} alt="avatar" />
            <div>
              <strong>First Name:</strong> {contact.firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {contact.lastName}
            </div>
            <div>
              <strong>Email:</strong> {contact.email}
            </div>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactForm;
