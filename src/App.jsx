import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from './redux/contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import LoaderComponent from './components/Loader/Loader';

export default function App() {
  const error = useSelector(contactsSelectors.selectError);
  const contacts = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();
  const contactsLoading = useSelector(contactsSelectors.selectLoading);


  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contactsLoading && <LoaderComponent />}
      <h2>Contacts</h2>
      {contacts.length > 1 && !error && <Filter />}
      {contacts.length > 0 && !error ? (
        <ContactList />
      ) : (
        <p>Currently you phonebook has contacts. Please add them.</p>
      )}
    </div>
  );
}
