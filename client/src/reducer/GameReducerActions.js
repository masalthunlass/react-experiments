import {CREATE_GAME, INIT_GAME} from "../action/GameActions";

const createGame = (id, firstPlayer) => ({
    type : CREATE_GAME,
    payload: {id, firstPlayer}
});

const fetchGame = (id, players) => ({
    type : INIT_GAME,
    payload: {id, players}
});

export  default {createGame, fetchGame};
