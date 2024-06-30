import React from "react";

const Modal = ({ header, body, footer, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header}</h2>
                </div>
                <div className="modal-body">
                    <p>{body}</p>
                </div>
                <div className="modal-footer">
                    <p>{footer}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
