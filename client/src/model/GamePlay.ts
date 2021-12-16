export class GamePlay {

     players: string[] = [];
     id;

    constructor(id: string, firstPlayer: string) {
        this.id = id;
        this.players.push(firstPlayer);
    }

}

