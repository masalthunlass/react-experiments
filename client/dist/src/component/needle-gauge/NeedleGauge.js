import React, {useState} from 'react';
import './NeedleGauge.css';

var NeedleGauge = function () {
    var _a = useState(90), position = _a[0], setPosition = _a[1];
    var needleStyle = function () {
        var min = 1;
        var max = 179;
        if (position > max)
            setPosition(max);
        if (position < min)
            setPosition(min);
        return {
            "--needle-position": "".concat(position, "deg")
        };
    };
    return React.createElement(React.Fragment, null,
        React.createElement("div", { id: "needle-gauge" },
            React.createElement("div", { className: "needle", style: needleStyle() })),
        React.createElement("button", { id: "turn-left", className: "gauge--button left", onClick: function () { return setPosition(position - 1); } }),
        React.createElement("button", { id: "turn-right", className: "gauge--button right", onClick: function () { return setPosition(position + 1); } }));
};
export default NeedleGauge;
