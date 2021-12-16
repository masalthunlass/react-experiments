import React from 'react';
import './Gauge.css';

function Gauge() {
    return React.createElement("div", { id: "gauge", className: "score-slice" },
        React.createElement("div", { className: "needle" }));
}
export default Gauge;
