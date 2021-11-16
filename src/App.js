import React from 'react';
import './App.css';
import UmbrellaGauge from "./umbrella-gauge/UmbrellaGauge";
import NeedleGauge from "./needle-gauge/NeedleGauge";

function App() {
    return <div>
        <h1>Longueur d'ondes</h1>
        <UmbrellaGauge/>
        <NeedleGauge/>
    </div>;
}

export default App;
