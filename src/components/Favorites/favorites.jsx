import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "../Favorites/Favorites.module.css";
import { removeFavorite } from "../../Redux/actions";
import Cards from "../Cards/Cards";

const Favorites = (props) => {
  const { myFavorites } = props;

const handleRemoveFavorite = (id) => {
    props.removeFavorite(id);
  };

  return (
    <div>
      <div  className={styles.divFavoritesList}>
        {myFavorites.map((char) => {
          return (
          <Card 
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin ? char.origin.name : "Origen Desconocido"} // Verificar si char.origin.name existe
            image={char.image}
          />
          )
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
