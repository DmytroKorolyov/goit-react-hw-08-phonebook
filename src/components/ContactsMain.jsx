import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { filterContacts, selectFilter } from '../redux/filterSlice';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'
import { addContactThunk, fetchContactsThunk } from '../redux/operation';

const ContactsMain = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);


  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(filterContacts(value));
  };

  const handleAddContact = (name, number) => {
    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };
    const isContactExist = contacts.some(contact => contact.name === name);
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(newContact));
  };



const filteredContacts = filter
    ? contacts.filter(item => item.name.toLowerCase().includes(filter))
    : contacts;



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default ContactsMain;











