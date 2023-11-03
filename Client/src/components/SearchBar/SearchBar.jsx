import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";


const SearchBar = (props) => {
  const { onSearch } = props;

  const [id, setId] = useState("");
  const [idHistory, setIdHistory] = useState([]); 

  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  const handleSubmit = () => {
    if (!idHistory.includes(id)) {
      onSearch(id);
      setIdHistory([...idHistory, id]);
    } else {
      window.alert("¡This ID has already been added!");
    }
    setId("");
  };
  
  const handleRandom = () => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 500) + 1;
    } while (idHistory.includes(randomId.toString()));

    onSearch(randomId.toString());
    setIdHistory([...idHistory, randomId.toString()]);
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
      <button className={styles.randomSearch} onClick={handleRandom}>
      <img src=".././Random.png" alt="Random Icon" style={{  margin: '1px', height: '35px' }}/>
      </button>
    </div>
  );
};

export default SearchBar;
