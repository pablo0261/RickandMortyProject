import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";


const SearchBar = (props) => {
  const { onSearch } = props;

  const [id, setId] = useState("");
  const [idHistory, setIdHistory] = useState([]); 

  const handleChange = (event) => {
    const value = event.target.value;
    if (!idHistory.includes(value)) {
      setId(value);
    }
  };

  const handleSubmit = () => {
    onSearch(id);
    setIdHistory([...idHistory, id]);
    setId("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };


  return (
    <div className={styles.SearchContainer}>
      <input
        className={styles.inputSearch}
        type="search"
        placeholder="Enter an ID "
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        value={id}
      />
      <button className={styles.buttonSearch} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default SearchBar;
