import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import shortid from "shortid";
import actions from "../../redux/contacts/contacts-actions";
import { getItems } from "../../redux/contacts/contacts-selectors";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const repeatName = name => items.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (repeatName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(actions.addContact(name, number));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
          className={styles.contactName}
        />
      </label>
      <label htmlFor={numberInputId}>Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={numberInputId}
          className={styles.contactNumber}
        />
      </label>
      <button type="submit" className={styles.btn}>Add contact</button>
    </form>
  );
}

// function ContactForm({items, onAddContact}) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const nameInputId = shortid.generate();
//   const numberInputId = shortid.generate();
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (items.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
//             alert(`${name} is already in contacts`);
//             return;
//         }
//     onAddContact(name,number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };
  
//   return (
//     <form className={styles.contactForm} onSubmit={handleSubmit}>
//       <label htmlFor={nameInputId}>Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           onChange={handleChange}
//           id={nameInputId}
//           className={styles.contactName}
//         />
//       </label>
//       <label htmlFor={numberInputId}>Number
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           onChange={handleChange}
//           id={numberInputId}
//           className={styles.contactNumber}
//         />
//       </label>
//       <button type="submit" className={styles.btn}>Add contact</button>
//     </form>
//   );
// }

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func,
// }

// const mapStateToProps = state => ({
//     items: state.contacts.items,
//   });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: (name, number) => dispatch(actions.addContact(name, number))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);