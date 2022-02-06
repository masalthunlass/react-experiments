import {Game} from "../domain/Game.js";
import fs from "fs";

const gamesFile = './resource/games.json';
export const GameController = {
    createGame: (id: string, firstPlayer: string) => {
        return new Promise<Game[]>((resolve, reject) => {
            let games: Game[] = [];
            games.push(new Game(id, firstPlayer));
            let writer = fs.createWriteStream(gamesFile);
            writer.write(JSON.stringify(games));
            writer.end();
            writer.on("finish", () => {
                resolve(games);
            });
            writer.on("error", reject);
        });
    },
    getGame: (id: string) => {
        return new Promise<Game>((resolve, reject) => {
                fs.readFile(gamesFile, "utf8", (error, data) => {
                    if (error) {
                        reject(error);
                    }
                    let games = JSON.parse(data).filter((game: Game) => game.id === id);
                    resolve(games[0]);
                });
            }
        );
    }

}

