import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//para hacer promesas con redux
import thunk from "redux-thunk";

//importamos los reducers de todos los ducks
import searchReducer from "./searchDucks";

const rootReducer = combineReducers({
  search: searchReducer,
});

//para configurar la extension de google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
