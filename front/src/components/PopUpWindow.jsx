import React from "react";
import Modal from "./UI/Modal";

const PopUpWindow = (props) => {
  return (
    <Modal onClose={props.closeModal}>
      <h2 className="tagH1">Hey, Welcome to my personal blog!</h2>
      <div className="bottomContents">
        <span className="textModal">
          Glad to see ya pal🤠, click "continue" to see my{" "}
          <span className="collection">Favorite Collections</span>
        </span>
        <button onClick={props.closeModal} className="modalBtn">
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default PopUpWindow;
