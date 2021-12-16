import thunkMiddleware from 'redux-thunk';
import Reducer from "./GameReducer";
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

var middleware = applyMiddleware(thunkMiddleware);
var enhancers = composeWithDevTools(middleware);
var store = createStore(Reducer.GameReducer, enhancers);
export default store;
