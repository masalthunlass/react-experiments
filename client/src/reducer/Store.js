import thunkMiddleware from 'redux-thunk';
import Reducer from "./GameReducer";
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = applyMiddleware(thunkMiddleware);
const enhancers = composeWithDevTools(middleware);
const store = createStore(Reducer.GameReducer, enhancers);

export default store;
