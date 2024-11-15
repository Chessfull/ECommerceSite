import React from "react";
import "./Modal.css"

const DeleteModal = ({ onConfirm, onCancel }) => { // -> Props coming from product.jsx
  return (
    <div className="delete-modal">
      <div className="delete-modal-container">
        <p>Are you sure about this?</p>
        <button id="delete-modal-yes" onClick={onConfirm}>Yes</button>
        <button id="delete-modal-no" onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
