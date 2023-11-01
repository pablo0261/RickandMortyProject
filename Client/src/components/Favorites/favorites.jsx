import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "../Favorites/Favorites.module.css";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); //! ver si tiene funcionalidad o sacarlo

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux); //! ver si tiene funcionalidad o sacarlo
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.divFavoritesList}>
      <div className={styles.selectContainer}>
        <select id="orderSelector" onChange={handleOrder}>
          <option value="A">Order A-Z </option>
          <option value="D">Order Z-A</option>
        </select>
      </div>
      <div className={styles.selectContainer}>
        <select id="filterSelector" onChange={handleFilter}>
          <option value="All">All</option> 
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <div className={styles.divFavoritesCars}>
          {myFavorites.map((char) => {
            return (
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin } 
                image={char.image}
                onClose={() => {}} //! quitar la propiedad si no la voy a utilizar
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {//! reemplazar por useSelector
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
