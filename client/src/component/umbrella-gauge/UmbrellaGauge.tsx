import React from 'react';
import './UmbrellaGauge.css';

const UmbrellaGauge = () => {

    const needleStyle = (position = 0, visibility = 'hidden') => {
        return {
            "--needle-position": `${position}deg`,
            "--needle-visibility": `${visibility}`
       }  as React.CSSProperties;
    }
    const randomInt = (max: number) => {
            return Math.floor(Math.random() * max);
    }
    const dialStyle = () => {
        const minRight = 0;
        const maxLeft = 155;
        let start = randomInt(maxLeft);
        if (start > maxLeft) start = maxLeft;
        if (start < minRight) start = minRight;
        return {
            "--white-zone-left-min": '0deg',
            "--white-zone-left-max": `${start}deg`,
            "--yellow-left-zone-min": `${start}deg`,
            "--yellow-left-zone-max": `${start + 5 }deg`,
            "--yellow-right-zone-min": `${start +20 }deg`,
            "--yellow-right-zone-max": `${start +25 }deg`,
            "--orange-left-zone-min":  `${start +5 }deg`,
            "--orange-left-zone-max": `${start +10 }deg`,
            "--orange-right-zone-min": `${start +15 }deg`,
            "--orange-right-zone-max":`${start +20 }deg`,
            "--grey-zone-min": `${start +10 }deg`,
            "--grey-zone-max": `${start +15 }deg`,
            "--white-zone-right-min": `${start +25 }deg`,
            "--white-zone-right-max": '360deg',
        }  as React.CSSProperties;
    }

    return <div id="umbrella-gauge" style={dialStyle()}>
        <div className="needle" style={needleStyle(23)}/>
    </div>
}

export default UmbrellaGauge;
