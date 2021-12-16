import {GamePlay} from "../model/GamePlay";
import {CREATE_GAME, INIT_GAME} from "../action/GameActions";
import {Reducer} from "redux";

//tester les reducers

const GameReducer: Reducer = (state = {gamePlay: new GamePlay('', '')}, action) => {
    switch (action.type) {
        case CREATE_GAME:
            return {gamePlay: {id: action.payload.id, players: [action.payload.firstPlayer]}};
        case INIT_GAME:
            return {gamePlay: {id: action.payload.id, players: action.payload.players}};
        default:
            return state;
    }
};

export default {GameReducer};
