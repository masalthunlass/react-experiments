import {GamePlay} from "../model/GamePlay";


const GameReducer = (state ={gamePlay : new GamePlay('')} , action) => {
    switch (action.type) {
        case 'CREATE_GAME':
            return {gamePlay: new GamePlay(action.id)};
        default:
            return state;
    }
};

export default {GameReducer};
