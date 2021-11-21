import React from 'react';
import './DispatchPlayersPanel.css';
import SubmitButton from "../submit-button/SubmitButton";


const DispatchPlayersPanel = ({gameId}) => {

    const play = () => (event) => {
        event.preventDefault();
    };

    return <div className="dispatch-players-panel">
            <div id="team-medium" className="team">
                </div>
            <div id="team-adversary" className="team">
                </div>
            <SubmitButton label="Jouer" submit={play()}/>
    </div>;
}

export default DispatchPlayersPanel;


