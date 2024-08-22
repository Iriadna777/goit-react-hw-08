import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <p>{contact.name}: {contact.number}</p>
      {/* <div className={styles.contactName}>{contact.name}:</div>
      <div className={styles.contactNumber}>{contact.number}</div> */}
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );

  // return (
  //   <li className={styles.contact}>
  //     <span>{contact.name}: {contact.number}</span>
  //     <button className={styles.deleteButton} onClick={handleDelete}>
  //       Delete
  //     </button>
  //   </li>
  // );
};

export default Contact;
