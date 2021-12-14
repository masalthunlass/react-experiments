import React, {useEffect, useState} from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import SubmitButton from "../submit-button/SubmitButton";
import {useNavigate} from "react-router-dom";
import {GameService} from "../../service/GameService";
import {GamePlay} from "../../model/GamePlay";

const mapStateToProps = (state) => {
    return {
        gamePlay: state.gamePlay || new GamePlay()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (id, firstPlayer) => {
            dispatch(GameService.create(id, firstPlayer))
        },
    }
}

const StartGamePanel = ({gamePlay, createGame}) => {

    const [player, setPlayer] = useState('');
     let navigate = useNavigate();

    useEffect(() => {
        if (gamePlay.id) {
            navigate("/startGame/"+gamePlay.id);
        }
    }, [gamePlay]);

    const start = (id) => (event) => {
        createGame(id, player);
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

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePanel);
