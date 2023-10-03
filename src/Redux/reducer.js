import { ADD_FAV, REMOVE_FAV, REMOVE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};// aqui dentro podria tener varios estados

const rootReducer = (state = initialState, {type, payload}) => { //en lugar de action hago destructoring e pongo los parametros que me interesan type y payload
    //esto se puede hacer con un IF tambien
    switch (type) {// ojo si no hago destructoring arriba aqui va =action.type
    case ADD_FAV:
      const idToAdd = Number(payload);
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      //es lo mismo que hacer esto?
      // let copy1 = state.myFavorites;
      // copy1.push(payload);
      // return(
      //   ...state,
      //   myFavorites: copy1,
    
      };
    case REMOVE_FAV:
      const idToRemove = Number(payload); 
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (myfav) => myfav.id !== idToRemove
        ),
      }; 
      //!falta la action de cerrar las favoritas
    default: {
      return { ...state };
    }
  }
};


export default rootReducer;