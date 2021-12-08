import React from 'react';
import './App.css';
import StartGamePanel from "./component/start-game-panel/StartGamePanel";
import DispatchPlayersPanel from "./component/dispatch-players-panel/DispatchPlayersPanel";
import {Route, Routes} from "react-router-dom";


function App() {
    return <div className="app">

        <h1>Longueur d'ondes</h1>
        <div className="container">
            <Routes>
                <Route path="/" element={<StartGamePanel/>}/>
                <Route path="/startGame" element={<DispatchPlayersPanel/>}/>
            </Routes>
        </div>

    </div>;
}

export default App;
