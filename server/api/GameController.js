const fs = require('fs');

const gamesFile = './resource/games.json';
const GameController =  {

    createGame: (id, firstPlayer) => {
        return new Promise((resolve, reject) => {
                let games = [];
                games.push({id,players: [firstPlayer]});
            let writer = fs.createWriteStream(gamesFile);
                writer.write(JSON.stringify(games));
                writer.end();
                writer.on("finish", () => { resolve(games); });
                writer.on("error", reject);
        });
    },

    getGame: (id) => {
        return new Promise((resolve, reject) => {
            fs.readFile(gamesFile, "utf8", (err, data) => {
                if (err) {
                    reject(err);
                }
                let games = JSON.parse(data).filter((game) => game.id === id);
                resolve(games[0]);
            });
        });
    }

}

module.exports = GameController;
