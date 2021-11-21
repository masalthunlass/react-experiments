const createGame = (id, firstPlayer) => ({
    type : 'CREATE_GAME',
    payload: {id, firstPlayer}
});

export  default {createGame};
