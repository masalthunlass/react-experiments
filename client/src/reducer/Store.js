import {createStore} from 'redux';
import Reducer from "./GameReducer";

const store = createStore(Reducer.GameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
