import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
// import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

// const ContactForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;

//     if (name && number) {
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };

//       dispatch(addContact(newContact));
//       form.reset();
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <label className={styles.label}>
//         Name
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           required
//         />
//       </label>
//       <label className={styles.label}>
//         Number
//         <input
//           className={styles.input}
//           type="text"
//           name="number"
//           required
//         />
//       </label>
//       <button className={styles.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    console.log('Submitting contact:', { name, number });

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
       <input type="text" name="name" placeholder="Name" required />
       <input type="text" name="number" placeholder="Number" required />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
