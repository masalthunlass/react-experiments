import React from "react";
import './SubmitButton.css';

const SubmitButton = ({submit, label}) => {
    return <><button onClick={submit} type="submit" className="submit-button">{label}</button></>;
}

export default SubmitButton;
