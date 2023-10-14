import { useState } from "react";
import styles from "./Form.module.css";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    console.log(property, value);
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.divContainer}>
      <form className={styles.form} onSubmit={handleSubmit} >
        <div className={styles.Login}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">E-mail: </label>
            <input
              className={styles.input}
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className={styles.spanErrors}> {errors.email} </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">Password: </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.spanErrors}> {errors.password}</p>
            )}
          </div>
        </div>
        <button className={styles.buttonForm} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
