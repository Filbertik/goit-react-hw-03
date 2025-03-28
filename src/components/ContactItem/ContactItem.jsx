import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={styles.item}>
    <div className={styles.userInfo}>
      <FaUser className={styles.icon} />
      <strong>{name}</strong>
    </div>
    <div className={styles.phoneInfo}>
      <FaPhone className={styles.icon} />
      <span>{number}</span>
    </div>
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default ContactItem;
