import axios from "axios";

//constantes
const dataInicia = {
  array: [],
};

//types
const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS ";

//reducer
export default function heroReducer(state = dataInicia, accion) {
  switch (accion.type) {
      case GET_HEROES_SUCCESS: 
      return {...state, array: action.payload}
      default: 
      return state
  }
}

//actions
export const obtenerHeoresAccion = () => (dispatch, getState) => {
  try {
    const res = await axios.get(
      "http://superheroapi.com/api/10159386337269259/search/1";
      dispatch({
           type : GET_HEROES_SUCCESS, 
           payload: res.data
      }
    );
  } catch (error) {
    colsole.log(error);
  }
};
