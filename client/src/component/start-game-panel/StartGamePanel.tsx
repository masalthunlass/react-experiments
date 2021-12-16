import React, {useEffect, useState} from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import SubmitButton from "../submit-button/SubmitButton";
import {useNavigate} from "react-router-dom";
import {GameService} from "../../service/GameService";
import {GamePlay} from "../../model/GamePlay";
import {Dispatch} from 'redux';

interface Props {
    gamePlay: GamePlay;
    createGame: ((id: string, firstPlayer: string) => {});
}
const mapStateToProps = (state) => {
    return {
        gamePlay: state.gamePlay || new GamePlay('', '')
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createGame: (id: string, firstPlayer: string) => {
            // @ts-ignore
            dispatch(GameService.create(id, firstPlayer))
        },
    }
}

const StartGamePanel: React.FC<Props> = ({gamePlay, createGame}) => {

    const [player, setPlayer] = useState('');
     let navigate = useNavigate();

    useEffect(() => {
        if (gamePlay.id) {
            navigate("/startGame/"+gamePlay.id);
        }
    }, [gamePlay]);

    const start = (id: string) => (event) => {
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
