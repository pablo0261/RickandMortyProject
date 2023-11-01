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

  setTimeout(() => {//*para exponr el menu temporalmente
    setMenuOpen(false);
  }, 5000);

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
        <menu
          className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" ><path fill="currentColor" fillRule="evenodd" d="M11.5 3.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0 4.75A1.25 1.25 0 1 1 9 8a1.25 1.25 0 0 1 2.5 0Zm-5.75 6a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm4.5 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm-4.5-4.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm0-4.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z" clipRule="evenodd"></path></svg>
        </menu>
        <div
          className={`${styles.buttonContainer} ${menuOpen ? styles.open : ""}`}
        >
          <button className={styles.buttonLink}>
            <NavLink to={"/Home"} className={styles.activeLink}>
              <img className={styles.imgIcon} src="ICONO HOME.png" alt="Home" />
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
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to={"/Home"} className={styles.mobileLink}>
            Home
          </NavLink>
          <NavLink to={"/Favorites"} className={styles.mobileLink}>
            Favorites
          </NavLink>
          <NavLink to={"/About"} className={styles.mobileLink}>
            About Us
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
