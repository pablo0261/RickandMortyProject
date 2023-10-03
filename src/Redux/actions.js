export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,//type y payload es lo que envio y recibo en action en mi reducer. por eso le puedo hacer destructoring
    }
};

const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    }
};

export {addFav, removeFav, removeFavorite};