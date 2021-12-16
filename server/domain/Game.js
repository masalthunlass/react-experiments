class Game {

    players = [];

    constructor(id, firstPlayer) {
        this.id = id;
        this.players.push(firstPlayer);
    }

}

module.exports = Game;
