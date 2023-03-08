import React, { useState } from 'react';

import { Form } from './AddForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const AddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [inputValues, setInputValues] = useState({
    name: '',
    phone: '',
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newName = evt.target.name.value;
    const newNumber = evt.target.phone.value;

    if (
      contacts.items.some(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      ) ||
      contacts.items.some(
        ({ phone }) => phone.toLowerCase() === newNumber.toLowerCase()
      )
    ) {
      alert(`<${newName}> or <${newNumber}> is already in contacts`);
      return;
    }

    dispatch(addContact(inputValues));
    setInputValues({ name: '', phone: '' });
  };
  console.log(inputValues);
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={inputValues.name}
          onChange={handleOnChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          type="tel"
          name="phone"
          placeholder="number"
          value={inputValues.phone}
          onChange={handleOnChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">add contact</button>
    </Form>
  );
};

export default AddForm;
