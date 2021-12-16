import React from 'react';
import './StartGamePanel.css';
import { GamePlay } from "../../model/GamePlay";
interface Props {
    gamePlay: GamePlay;
    createGame: ((id: string, firstPlayer: string) => {});
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<Props>, import("react-redux").Omit<Props, "gamePlay" | "createGame">>;
export default _default;
