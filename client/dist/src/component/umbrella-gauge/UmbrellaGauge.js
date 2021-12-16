import React from 'react';
import './UmbrellaGauge.css';

var UmbrellaGauge = function () {
    var needleStyle = function (position, visibility) {
        if (position === void 0) { position = 0; }
        if (visibility === void 0) { visibility = 'hidden'; }
        return {
            "--needle-position": "".concat(position, "deg"),
            "--needle-visibility": "".concat(visibility)
        };
    };
    var randomInt = function (max) {
        return Math.floor(Math.random() * max);
    };
    var dialStyle = function () {
        var minRight = 0;
        var maxLeft = 155;
        var start = randomInt(maxLeft);
        if (start > maxLeft)
            start = maxLeft;
        if (start < minRight)
            start = minRight;
        return {
            "--white-zone-left-min": '0deg',
            "--white-zone-left-max": "".concat(start, "deg"),
            "--yellow-left-zone-min": "".concat(start, "deg"),
            "--yellow-left-zone-max": "".concat(start + 5, "deg"),
            "--yellow-right-zone-min": "".concat(start + 20, "deg"),
            "--yellow-right-zone-max": "".concat(start + 25, "deg"),
            "--orange-left-zone-min": "".concat(start + 5, "deg"),
            "--orange-left-zone-max": "".concat(start + 10, "deg"),
            "--orange-right-zone-min": "".concat(start + 15, "deg"),
            "--orange-right-zone-max": "".concat(start + 20, "deg"),
            "--grey-zone-min": "".concat(start + 10, "deg"),
            "--grey-zone-max": "".concat(start + 15, "deg"),
            "--white-zone-right-min": "".concat(start + 25, "deg"),
            "--white-zone-right-max": '360deg',
        };
    };
    return React.createElement("div", { id: "umbrella-gauge", style: dialStyle() },
        React.createElement("div", { className: "needle", style: needleStyle(23) }));
};
export default UmbrellaGauge;
