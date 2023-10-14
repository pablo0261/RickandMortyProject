import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import styles from "../components/Detail/Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  // const history = useHistory();

  // const handleGoBack = () => {
  //   history.goBack();
  // };

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.containerDetail}>
      <div>
        {character.image && (
          <img className={styles.imageDetail} src={character.image} />
        )}
      </div>
      <div className={styles.containernameDetail}>
        <div className={styles.nameDetail}>
          {character.name ? <p> {character.name}</p> : <p>Loading...</p>}
        </div>

        <div className={styles.divDetail}>
          {character.status && (
            <p className={styles.caracteristicsDetail}>
              Estado: {character.status}
            </p>
          )}
          {character.species && (
            <p className={styles.caracteristicsDetail}>
              Especie: {character.species}
            </p>
          )}
          {character.gender && (
            <p className={styles.caracteristicsDetail}>
              Género: {character.gender}
            </p>
          )}
          {character.origin && character.origin.name && (
            <p className={styles.caracteristicsDetail}>
              Origen: {character.origin.name}
            </p>
          )}
        </div>
      </div>
      {/* <div>
        <button className={styles.buttonReturn} onClick={handleGoBack}>
          <img className={styles.imgReturn} src="ButtonReturn.png" alt="GoBack" />
        </button>
      </div> */}
    </div>
  );
};

export default Detail;
