import actionsCreator from '../reducer/GameReducerActions'
import axios from "axios";

export const GameCreationService = {
    create: (id, firstPlayer) => async (dispatch) => {
         axios.post('http://localhost:5000/api/games', {id, firstPlayer}).then((res) => {
            dispatch(actionsCreator.createGame(id, firstPlayer));
          }).catch(error => {
              console.error(error)
          });
    }
}

