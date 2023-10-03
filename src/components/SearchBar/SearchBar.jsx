import React from 'react';
import styles from './SearchBar.module.css';
import { useState } from 'react'; 

const SearchBar = (props) => {
  const { onSearch } = props;

const [id, setId] = useState('');

const handleChange = (event) => {
  setId(event.target.value);
}

const handleSubmit = () => {
  onSearch(id);
  setId("");
}
  
  return (
      <div className={styles.SearchContainer}>
        <input className={styles.inputSearch} type="search" placeholder="Escribe un ID " onChange={handleChange} value={id} />
        <button className={styles.buttonSearch} onClick={handleSubmit}>
          Agregar
        </button>
      </div>
      
  );
}

export default SearchBar;