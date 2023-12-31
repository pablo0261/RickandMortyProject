import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "../Favorites/Favorites.module.css";
import { filterCards, orderCards } from "../../Redux/actions";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); 

  console.log(myFavorites)

  const handleOrder = () => {
    dispatch(orderCards(aux? "D" : "A"));
    setAux(!aux); 
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.divFavoritesList}>
      <div className={styles.orderToggleContainer}>
        <button className={styles.orderToggleButton} id="orderSelector" onClick={handleOrder}>
          {aux ? "A-Z" : "Z-A"}
        </button>
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
                origin={char.origin} 
                image={char.image}
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
