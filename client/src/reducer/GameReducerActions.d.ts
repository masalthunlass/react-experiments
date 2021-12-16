declare const _default: {
    createGame: (id: string, firstPlayer: string) => {
        type: string;
        payload: {
            id: string;
            firstPlayer: string;
        };
    };
    fetchGame: (id: string, players: string[]) => {
        type: string;
        payload: {
            id: string;
            players: string[];
        };
    };
};
export default _default;
