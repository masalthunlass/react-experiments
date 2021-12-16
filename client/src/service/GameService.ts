import actionsCreator from '../reducer/GameReducerActions'
import axios from "axios";
import {Dispatch} from 'redux';

export const GameService = {
    create:  (id: string, firstPlayer: string) => async (dispatch: Dispatch) => {
        axios.post('http://localhost:5000/api/games', {id, firstPlayer}).then(() => {
            dispatch(actionsCreator.createGame(id, firstPlayer));
        }).catch(error => {
            console.error(error);
        });
    },
    fetch: (id: string) => async (dispatch: Dispatch) => {
        axios.get('http://localhost:5000/api/games/' + id).then(({data}) => {
            dispatch(actionsCreator.fetchGame(data.id, data.players));
        }).catch(error => {
            console.error(error);
        });
    }
}


