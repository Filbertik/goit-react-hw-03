import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <label>Пошук контактів</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Введіть ім'я для пошуку"
    />
  </div>
);

export default SearchBox;
