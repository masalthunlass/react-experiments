import actionsCreator from '../reducer/GameReducerActions'
import axios from "axios";

export const GameService = {
    create: (id, firstPlayer) => async (dispatch) => {
        axios.post('http://localhost:5000/api/games', {id, firstPlayer}).then(() => {
            dispatch(actionsCreator.createGame(id, firstPlayer));
        }).catch(error => {
            console.error(error);
        });
    },
    fetch: (id) => async (dispatch) => {
        axios.get('http://localhost:5000/api/games/'+ id).then(({data}) => {
            dispatch(actionsCreator.fetchGame(data.id, data.players));
        }).catch(error => {
            console.error(error);
        });
    }
}


