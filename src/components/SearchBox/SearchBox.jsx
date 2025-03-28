import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <label>Search </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter a search term"
    />
  </div>
);

export default SearchBox;
