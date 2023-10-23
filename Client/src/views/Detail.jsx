import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../components/Detail/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error al obtener detalles del personaje:", error);
      });
  }, [id]);

  return (
    <div className={styles.containerDetail}>
        <button className={styles.buttonReturn} onClick={() => window.history.back()}>
          <img className={styles.imgReturn} src='.././goBack.png' alt="GoBack" />
        </button>
      <div>
        {character.image && (
          <img className={styles.imageDetail} src={character.image} alt="Characters" />
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
    </div>
  );
};

export default Detail;
