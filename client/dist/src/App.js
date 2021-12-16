import React from 'react';
import './App.css';
import StartGamePanel from "./component/start-game-panel/StartGamePanel";
import DispatchPlayersPanel from "./component/dispatch-players-panel/DispatchPlayersPanel";
import {Route, Routes} from "react-router-dom";

var App = function () {
    return React.createElement("div", { className: "app" },
        React.createElement("h1", null, "Longueur d'ondes"),
        React.createElement("div", { className: "container" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(StartGamePanel, null) }),
                React.createElement(Route, { path: "/startGame/:id", element: React.createElement(DispatchPlayersPanel, null) }))));
};
export default App;
