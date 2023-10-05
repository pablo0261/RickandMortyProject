import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

const Cards = (props) => {
  const { characters, onClose } = props;

  return (
    <div className={styles.divCards}>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
          isFavorite={char.isFavorite}
        />
      ))}
    </div>
  );
};

export default Cards;
