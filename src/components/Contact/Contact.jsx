import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.item}>
    <div className={styles.userInfo}>
      <FaUser className={styles.icon} />
      <strong>{name}</strong>
    </div>
    <div className={styles.phoneInfo}>
      <FaPhone className={styles.icon} />
      <span>{number}</span>
    </div>
    <button onClick={() => onDelete(id)}>Видалити</button>
  </li>
);

export default Contact;
