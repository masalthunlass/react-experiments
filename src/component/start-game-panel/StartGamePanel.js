import React from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import actionsCreator from '../../reducer/GameReducerActions';
import SubmitButton from "../submit-button/SubmitButton";

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
        <SubmitButton label="Jouer" submit={start("game1")}/>
    </div>;
}

export default connect(null, mapDispatchToProps)(StartGamePanel);
