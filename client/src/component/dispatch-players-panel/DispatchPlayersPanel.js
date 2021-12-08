import React from 'react';
import './DispatchPlayersPanel.css';
import SubmitButton from "../submit-button/SubmitButton";
import {connect} from "react-redux";
import {GamePlay} from "../../model/GamePlay";

const mapStateToProps = (state) => {
    return {
        gamePlay: state || new GamePlay()
    }
}


const DispatchPlayersPanel = ({gamePlay}) => {


    const play = () => (event) => {
        event.preventDefault();
    };

    return <div className="dispatch-players-panel">
            <div id="team-medium" className="team">
                {
                    gamePlay?.players?.map((player) => {
                        return (<div className="player">player</div>);
                    })
                }
                </div>
            <div id="team-adversary" className="team">
                </div>
            <SubmitButton label="Jouer" submit={play()}/>
    </div>;
}

export default connect(mapStateToProps) (DispatchPlayersPanel);


