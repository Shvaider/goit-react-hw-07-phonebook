import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://635adc406f97ae73a6386593.mockapi.io/api/v1/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
  axios
  .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, phone) => async dispatch => {
  const contact ={
    name,
    phone,
  };

  dispatch(addContactRequest());

  axios
  .post('/contacts', contact)
  .then(({ data }) => dispatch(addContactSuccess(data)))
  .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
  .delete(`/contacts/${id}`)
  .then(() => dispatch(deleteContactSuccess(id)))
  .catch(error => dispatch(deleteContactError(error)));
};