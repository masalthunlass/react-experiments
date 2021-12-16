import React, {useEffect, useState} from 'react';
import './StartGamePanel.css';
import {connect} from "react-redux";
import SubmitButton from "../submit-button/SubmitButton";
import {useNavigate} from "react-router-dom";
import {GameService} from "../../service/GameService";
import {GamePlay} from "../../model/GamePlay";

var mapStateToProps = function (state) {
    return {
        gamePlay: state.gamePlay || new GamePlay('', '')
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        createGame: function (id, firstPlayer) {
            // @ts-ignore
            dispatch(GameService.create(id, firstPlayer));
        },
    };
};
var StartGamePanel = function (_a) {
    var gamePlay = _a.gamePlay, createGame = _a.createGame;
    var _b = useState(''), player = _b[0], setPlayer = _b[1];
    var navigate = useNavigate();
    useEffect(function () {
        if (gamePlay.id) {
            navigate("/startGame/" + gamePlay.id);
        }
    }, [gamePlay]);
    var start = function (id) { return function (event) {
        createGame(id, player);
        event.preventDefault();
    }; };
    var onChange = function () { return function (event) {
        var fieldValue = event.target.value;
        setPlayer(fieldValue);
    }; };
    return React.createElement("div", { className: "start-game-panel" },
        React.createElement("form", null,
            React.createElement("label", null, "Nom de joueur"),
            " ",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "player", value: player, onChange: onChange() }),
            React.createElement("br", null),
            React.createElement(SubmitButton, { label: "Nouvelle partie", submit: start("game1") })));
};
export default connect(mapStateToProps, mapDispatchToProps)(StartGamePanel);
