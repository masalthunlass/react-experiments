import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './DispatchPlayersPanel.css';
import SubmitButton from "../submit-button/SubmitButton";
import {connect} from "react-redux";
import {GamePlay} from "../../model/GamePlay";
import {GameService} from "../../service/GameService";

const mapStateToProps = (state) => {
    return {
        gamePlay: state.gamePlay || new GamePlay()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (id) => {
            dispatch(GameService.fetch(id))
        }
    }
}

const DispatchPlayersPanel = ({gamePlay, fetchGame}) => {
    const {id} = useParams();
    useEffect(() => {
        if (id) {
            fetchGame(id);
        }
    }, [id]);

    const play = () => (event) => {
        event.preventDefault();
    };

    return <div className="dispatch-players-panel">
        <div className="dispatch-players-panel-container">
            <div id="team-medium" className="team">
                {
                    gamePlay.players?.map((player, index) => {
                        return (<p key={index} className="player">
                            <span className="index">{index + 1} </span>
                            {player}
                        </p>);
                    })
                }
            </div>
            <div id="team-adversary" className="team">
            </div>
        </div>
        <SubmitButton label="Jouer" submit={play()}/>
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(DispatchPlayersPanel);


