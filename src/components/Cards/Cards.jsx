import React from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

 const Cards = (props) => {
   const {characters, onClose} = props;

      return (
            <div className={styles.divCards}>
               {characters.map((char) => (
                  <Card 
                  key = {char.id}
                  id = {char.id}
                  name = {char.name}
                  status = {char.status}
                  species = {char.species}
                  gender = {char.gender}
                  origin = {char.origin.name}
                  image = {char.image}
                  onClose = {onClose}
                  isFavorite={char.isFavorite} 
                  />
               ))}
            </div>
            );
}

export default Cards;



// Utilizaremos este componente para renderizar muchos componentes Card. En otras palabras, este componente será el "contenedor" de todas las Cards.

// Lo primero que debes hacer es recibir la propiedad characters mediante las props. Esta propiedad es una arreglo con todos tus personajes. Por cada uno de ellos deberás renderizar un componente Card pasándole todas las propiedades que ya mencionamos en el ejercicio anterior.

// [NOTA]: agrega una propiedad llamada key y que sea igual al ID del personaje.

// [NOTA]: puedes guiarte con la documentación de React para realizar este ejercicio.