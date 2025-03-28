import styles from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={styles.item}>
    <p className={styles.contactInfo}>
      <strong>{name}</strong>: {number}
    </p>
    <button onClick={() => onDelete(id)}>Видалити</button>
  </li>
);

export default ContactItem;
