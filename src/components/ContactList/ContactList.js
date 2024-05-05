import React, { useState } from 'react';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    if (name && email) {
      const newContact = {
        id: Date.now(),
        name,
        email,
      };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <form onSubmit={addContact}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
