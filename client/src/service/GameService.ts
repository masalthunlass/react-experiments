import actionsCreator from '../reducer/GameReducerActions'
import {Dispatch} from 'redux';

export const GameService = {
    create:  (id: string, firstPlayer: string) => async (dispatch: Dispatch) => {
       fetch('http://localhost:5000/api/games', {method : 'post', body : JSON.stringify({id, firstPlayer})}).then(() => {
            dispatch(actionsCreator.createGame(id, firstPlayer));
        }).catch(error => {
            console.error(error);
        });
    },
    fetch: (id: string) => async (dispatch: Dispatch) => {
        fetch('http://localhost:5000/api/games/' + id,  {method : 'get'}).then(result => result.json()).then(({data}) => {
            dispatch(actionsCreator.fetchGame(data.id, data.players));
        }).catch(error => {
            console.error(error);
        });
    },
    addPlayer: (gameId: string, playerId: string) => async (dispatch: Dispatch) => {
        fetch('http://localhost:5000/api/games/' + gameId + '/players', {method : 'put', body :JSON.stringify({gameId, playerId})})
            .then(result => result.json()).then(({data}) => {
            dispatch(actionsCreator.fetchGame(data.id, data.players));
        }).catch(error => {
            console.error(error);
        });
    }
}


