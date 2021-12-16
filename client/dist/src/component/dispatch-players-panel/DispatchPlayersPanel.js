import React from 'react';
import {useParams} from 'react-router-dom';
import './DispatchPlayersPanel.css';
import SubmitButton from "../submit-button/SubmitButton";
import {connect} from "react-redux";
import {GamePlay} from "../../model/GamePlay";
import {GameService} from "../../service/GameService";

var mapStateToProps = function (state) {
    return {
        gamePlay: state.gamePlay || new GamePlay('', '')
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchGame: function (id) {
            dispatch(GameService.fetch(id));
        }
    };
};
//react testing library
var DispatchPlayersPanel = function (_a) {
    var _b;
    var gamePlay = _a.gamePlay, fetchGame = _a.fetchGame;
    var id = useParams().id;
    /*  useEffect(() => {
          if (id) {
              fetchGame(id);
          }
      }, [id]);*/
    var play = function () { return function (event) {
        event.preventDefault();
    }; };
    return React.createElement("div", { className: "dispatch-players-panel" },
        React.createElement("div", { className: "dispatch-players-panel-container" },
            React.createElement("div", { id: "team-medium", className: "team" }, (_b = gamePlay.players) === null || _b === void 0 ? void 0 : _b.map(function (player, index) {
                return (React.createElement("p", { key: index, className: "player" },
                    React.createElement("span", { className: "index" },
                        index + 1,
                        " "),
                    player));
            })),
            React.createElement("div", { id: "team-adversary", className: "team" })),
        React.createElement(SubmitButton, { label: "Jouer", submit: play() }));
};
export default connect(mapStateToProps, mapDispatchToProps)(DispatchPlayersPanel);
