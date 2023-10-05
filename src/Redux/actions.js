export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id, //type y payload es lo que envio y recibo en action en mi reducer. por eso le puedo hacer destructoring
  };
};

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
