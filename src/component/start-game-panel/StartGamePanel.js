import React, {useState} from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import actionsCreator from '../../reducer/GameReducerActions';
import SubmitButton from "../submit-button/SubmitButton";
import {useNavigate} from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (id, firstPlayer) => {
            dispatch(actionsCreator.createGame(id, firstPlayer))
        },
    }
}

const StartGamePanel = ({createGame}) => {

    const [player, setPlayer] = useState('');
    let navigate = useNavigate();

    const start = (id) => (event) => {
        createGame(id, player);
        navigate("/startGame");
        event.preventDefault();
    };

    const onChange = () => (event) => {
        const fieldValue = event.target.value;
        setPlayer(fieldValue);
    };

    return <div className="start-game-panel">
        <form>
            <label>Nom de joueur</label> <br/>
            <input type="text" name="player" value={player} onChange={onChange()}/>
            <br/>
            <SubmitButton label="Nouvelle partie" submit={start("game1")}/>
        </form>
    </div>;
}

export default connect(null, mapDispatchToProps)(StartGamePanel);
