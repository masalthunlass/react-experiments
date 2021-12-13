//const games = require('../resource/games.json')
const fs = require('fs')

const GameController =  {

    createGame : (id, firstPlayer) => {
        return new Promise((resolve, reject) => {
                let games = [];
                games.push({id, firstPlayer});
                let writer = fs.createWriteStream('./resource/games.json');
                writer.write(JSON.stringify(games));
                writer.end();
                writer.on("finish", () => { resolve(games); });
                writer.on("error", reject);
        });
    }

}

module.exports = GameController;
