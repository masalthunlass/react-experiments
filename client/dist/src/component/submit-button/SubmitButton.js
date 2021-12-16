import React from "react";
import './SubmitButton.css';

var SubmitButton = function (_a) {
    var submit = _a.submit, label = _a.label;
    return React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: submit, type: "submit", className: "submit-button" }, label));
};
export default SubmitButton;
