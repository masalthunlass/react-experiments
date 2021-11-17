import React from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import actionsCreator from '../../reducer/GameReducerActions';

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (id) => {
            dispatch(actionsCreator.createGame(id))
        },
    }
}

const StartGamePanel = ({createGame}) => {

    const start = (id) => (event) => {
        event.preventDefault();
        createGame(id);
    };

    return <div className="start-game-panel">
        <form onSubmit={start("game1")}>
            <button type="submit" className="start-game-panel--button" >Jouer</button>
        </form>
    </div>;
}

export default connect(null, mapDispatchToProps) (StartGamePanel);
