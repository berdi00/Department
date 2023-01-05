import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div
      className={props.classname === "video" ? "videoOverlay" : "modalOverlay"}
    >
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlay");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay classname={props.classname}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
