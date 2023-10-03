import React, { useState } from "react";
import styles from "../Nav/Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const { onSearch } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={styles.divContainer}>
      <div className={styles.divNav}>
        <h1>
          <img
            className={styles.imgRick}
            src="pngwing.com.png"
            alt="Rick & Morty"
          />
        </h1>
        <button
          className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div
          className={`${styles.buttonContainer} ${
            menuOpen ? styles.open : ""
          }`}
        >
          <button className={styles.buttonLink}>
            <NavLink to={"/Home"} className={styles.activeLink}>
              <img className={styles.imgIcon} src="ICONO HOME.png" alt="Home" />
              {/* <p>Home</p> */}
            </NavLink>
          </button>

          <button className={styles.buttonLink}>
            <NavLink to={"/Favorites"} className={styles.activeLink}>
              Favorites
            </NavLink>
          </button>

          <button className={styles.buttonLink}>
            <NavLink to={"/About"} className={styles.activeLink}>
              About Us
            </NavLink>
          </button>
        </div > 
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
