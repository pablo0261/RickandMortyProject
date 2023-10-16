import React from "react";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);

    //* Este codigo hace lo mismo que el de abajo
    // if (isFav) {
    //   removeFav(id);
    //   setIsFav(false);
    // }
    // if (!isFav) {
    //   addFav(props);
    //   setIsFav(true);
    // }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          <img
            className={styles.estrellaFav}
            src="estrella_amarilla.png"
            alt="Favoritos"
          />
        </button>
      ) : (
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          <img
            className={styles.estrella}
            src="estrella_transparente.png"
            alt="No Favoritos"
          />
        </button>
      )}
      <button
      className={`${styles.buttonClose} ${isFav ? styles.transparentButton : ""}`}
      onClick={() => {
        onClose(id);
      }}
      >
        {isFav ? null : <p className={styles.buttonCloseText}>X</p>}
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.h2Name}>{name}</h2>
        <img className={styles.imgPersona} src={image} alt={name} />
      </Link>
      <div className={styles.divCaracteristics}>
        <h2 className={styles.h2Caracteristics}>{status}</h2>
        <h2 className={styles.h2Caracteristics}>{species}</h2>
        <h2 className={styles.h2Caracteristics}>{gender}</h2>
      </div>
      <h2 className={styles.h2Origin}>{origin}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  //esto a partir de ahora pasa a ser la props de mi componente
  return {
    // ahora en mis props tengo myFavorite:[]
    myFavorites: state.myFavorites, // 'myFavorite' debe coincidir con el nombre de tu estado en el store
  };
};

const mapDispatchToProps = (dispatch) => {
  return (dispatch) => ({
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
