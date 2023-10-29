export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from "axios";

//*EJEMPLO CON ASYNC AWAIT
const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const response = await axios.post(endpoint, character);
      const data = response.data;
      dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error al agregar a favoritos:", error);
    }
  };
};

const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error al eliminar favoritos:", error);
    }
  };
};

//* EJEMPLO CON PROMESAS
// const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };

const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export { addFav, removeFav, removeFavorite, filterCards, orderCards };
