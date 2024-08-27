import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
// import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?\d{10,13}$/,
        'Phone number is not valid (must be 10-13 digits)'
      )
      .required('Phone number is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>

          <label className={styles.label}>
            Number
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>

          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};


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

// const ContactForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;

//     console.log('Submitting contact:', { name, number });

//     dispatch(addContact({ name, number }));
//     form.reset();
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//        <input type="text" name="name" placeholder="Name" required />
//        <input type="text" name="number" placeholder="Number" required />
//       <button className={styles.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

export default ContactForm;
