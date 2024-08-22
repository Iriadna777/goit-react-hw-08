import React from 'react';
import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
