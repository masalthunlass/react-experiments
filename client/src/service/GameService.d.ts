import { Dispatch } from 'redux';
export declare const GameService: {
    create: (id: string, firstPlayer: string) => (dispatch: Dispatch) => Promise<void>;
    fetch: (id: string) => (dispatch: Dispatch) => Promise<void>;
    addPlayer: (gameId: string, playerId: string) => (dispatch: Dispatch) => Promise<void>;
};
