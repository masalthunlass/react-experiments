import {CREATE_GAME, INIT_GAME} from "../action/GameActions";

var createGame = function (id, firstPlayer) { return ({
    type: CREATE_GAME,
    payload: { id: id, firstPlayer: firstPlayer }
}); };
var fetchGame = function (id, players) { return ({
    type: INIT_GAME,
    payload: { id: id, players: players }
}); };
export default { createGame: createGame, fetchGame: fetchGame };
