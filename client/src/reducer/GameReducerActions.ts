import {CREATE_GAME, INIT_GAME} from "../action/GameActions";


const createGame = (id: string, firstPlayer: string) => ({
    type : CREATE_GAME,
    payload: {id, firstPlayer}
});

const fetchGame = (id: string, players: string[]) => ({
    type : INIT_GAME,
    payload: {id, players}
});

export  default {createGame, fetchGame};
