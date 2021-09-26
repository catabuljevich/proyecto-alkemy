import axios from "axios";
import HeroSource from "../api/HeroSource";

//constantes
const dataInicial = {
  array: [],
};

//types
const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS ";

//reducer
export default function searchReducer(state = dataInicial, accion) {
  switch (accion.type) {
    case GET_HEROES_SUCCESS:
      return { ...state, array: accion.payload };
    default:
      return state;
  }
}

//actions
export const obtenerHeoresAccion = (text) => async (dispatch, getState) => {
  const res = await axios.get(
    HeroSource.get(`/10159386337269259/search/${text}`)
  );
  dispatch({
    type: GET_HEROES_SUCCESS,
    payload: res.data.results,
  });
};
