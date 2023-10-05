import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
}; // aqui dentro podria tener varios estados

const rootReducer = (state = initialState, { type, payload }) => {
  //en lugar de action hago destructoring e pongo los parametros que me interesan type y payload
  //esto se puede hacer con un IF tambien
  switch (
    type // ojo si no hago destructoring arriba aqui va =action.type
  ) {
    case ADD_FAV:
      // const idToAdd = Number(payload);
      // return {
      //   ...state,
      //   allCharacters: [...state.allCharacters, payload],
      //es lo mismo que hacer esto?
      let copy1 = state.allCharacters;
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters: copy1,
      };
    case REMOVE_FAV:
      let copy2 = state.myFavorites.filter((chad) => {
        return chad.id !== Number(payload);
      });
      return {
        ...state,
        myFavorites: copy2,
      };

    case FILTER:
      let copy3 = state.allCharacters.filter((char)=>{
        return char.gender === payload
      })
      return {
        ...state,
        myFavorites:copy3
      };

    case ORDER:
      let copy4 = state.allCharacters
      let order = copy4.sort((a,b) => {
        if (payload === "A"){
          return a.id - b.id
        }
        else if(payload === "D"){
          return b.id - a.id
        } else {
          return 0;
        }
      })
        return {
          ...state,
          myFavorites: order 
        }
      
    default:
      return { ...state };
  }
};

export default rootReducer;
