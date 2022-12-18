import css from 'components/ContactList/ContactList.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ContactListItem = contact => {
  const dispatch = useDispatch();
  const { phone, name, id } = contact.contact;
  console.log(contact.contact);
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactsItem} key={id}>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
