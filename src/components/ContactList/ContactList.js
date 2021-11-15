import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as formActions from "../../redux/contactForm/form-actions";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contactItem}>
        <span className={styles.contactName}>{name}</span>
        <span className={styles.contactNumber}>{number}</span>
        <button
          className={styles.contactBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const lowerCasedFilter = filter.toLocaleLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(lowerCasedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(formActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  OnDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
