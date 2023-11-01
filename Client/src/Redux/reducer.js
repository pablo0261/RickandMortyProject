import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
import axios from "axios";

const initialState = {
  myFavorites: [],
  allCharacters: [],
}; 

const rootReducer = (state = initialState, { type, payload }) => {
  //en lugar de action hago destructoring y pongo los parametros que me interesan type y payload
  //esto se puede hacer con un IF tambien
  switch (
    type // ojo si no hago destructoring arriba aqui va =action.type
  ) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };//! esto esta bien? debería actualizar el estado de allcharacters?

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
      
    case FILTER:
      let copy3;
      if (payload === "All") {
        copy3 = state.allCharacters;
      } else {
        copy3 = state.allCharacters.filter((char) => {
          return char.gender === payload;
        });
      }
      return {
        ...state,
        myFavorites: copy3,
      };

    case ORDER:
      let copy4 = state.allCharacters;
      let order = copy4.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: order,
      };

    default:
      return state ;
  }
};

export default rootReducer;
