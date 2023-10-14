import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "../Favorites/Favorites.module.css";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.divFavoritesList}>
      <div className={styles.selectContainer}>
        <select id="orderSelector" onChange={handleOrder}>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
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
                origin={char.origin ? char.origin.name : "Origen Desconocido"} // Verificar si char.origin.name existe
                image={char.image}
                onClose={() => {}}
              />
            );
          })}
        </div>
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
