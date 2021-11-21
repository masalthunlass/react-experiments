import React from 'react';
import './App.css';
import StartGamePanel from "./component/start-game-panel/StartGamePanel";
import DispatchPlayersPanel from "./component/dispatch-players-panel/DispatchPlayersPanel";

function App() {
    return <div>

        <h1>Longueur d'ondes</h1>
        <StartGamePanel/>
        <DispatchPlayersPanel/>
    </div>;
}

export default App;
