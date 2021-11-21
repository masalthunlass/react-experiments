import React from 'react';
import './App.css';
import StartGamePanel from "./component/start-game-panel/StartGamePanel";
import DispatchPlayersPanel from "./component/dispatch-players-panel/DispatchPlayersPanel";
import {Route, Routes} from "react-router-dom";

function App() {
    return <div>

        <h1>Longueur d'ondes</h1>
        <Routes>
            <Route path="/" element={ <StartGamePanel/>} />
            <Route path="startGame" element={<DispatchPlayersPanel/>} />
        </Routes>


    </div>;
}

export default App;
