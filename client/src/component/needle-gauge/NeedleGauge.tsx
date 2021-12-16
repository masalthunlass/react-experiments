import React, {useState} from 'react';
import './NeedleGauge.css';

const NeedleGauge = () => {
    const [position, setPosition] = useState(90);

    const needleStyle = () => {
        const min = 1;
        const max = 179;
        if (position > max) setPosition(max);
        if (position < min) setPosition(min);
        return {
            "--needle-position": `${position}deg`
        } as React.CSSProperties;
    }

    return <>
        <div id="needle-gauge">
            <div className="needle" style={needleStyle()}/>
        </div>
        <button id="turn-left" className="gauge--button left" onClick={() => setPosition(position - 1)} />
        <button id="turn-right" className="gauge--button right" onClick={() => setPosition(position + 1)}/>
        </>;

}

export default NeedleGauge;
