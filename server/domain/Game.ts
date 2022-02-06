export class Game {

    private _players: string[] = [];

    constructor(private _id: string, firstPlayer: string) {
        this.id = _id;
        this.players.push(firstPlayer);
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get players(): string[] {
        return this._players;
    }

}
