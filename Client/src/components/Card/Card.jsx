import React from "react";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "../../../../Server/src/routes";



const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose } = props; 
  const myFavorites = useSelector((state) => state.myFavorites);//*El componente esta subscripto al estado global
  const dispatch = useDispatch();
  
  
  const addFavorites = (character) => {
    dispatch(addFav(character));
  };
  
  const removeFavorites = (id) => {
    dispatch(removeFav(id));
  };
  
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    isFav ? removeFavorites(id) : addFavorites(props);
    setIsFav(!isFav);
  };
  
  useEffect(() => {//*Mantiene actualizada la situacion de favorito de las cartas que se muestran en funcion de los cambios en el estado global.
    myFavorites.allFavorites?.forEach((fav) => {
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

export default Card;
