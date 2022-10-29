import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations} from 'redux/contacts';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const removeContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={styles.taskList}>
      {contacts.map(({ name, phone, id }) => (
        <li className={styles.taskList_item} key={id}>
          <p className={styles.taskList_name}>{name + ':  ' + phone}</p>
          {
            <button
              className={styles.taskList_button}
              type="button"
              name="delete"
              onClick={() => removeContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  removeContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
