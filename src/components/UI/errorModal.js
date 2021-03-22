import React from "react";
import "./errorModal.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button className="modalButton" type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
