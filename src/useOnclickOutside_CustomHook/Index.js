import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useClickOutside from './useOnclickOutside';

const UseClick = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useClickOutside(modalRef, () => {
        if (showModal) {
        setShowModal(false);
        }
    });

    return (
        <div>
        <Button variant="primary" onClick={toggleModal}>
            Open Modal
        </Button>

        <Modal show={showModal} onHide={toggleModal}>
            <div ref={modalRef}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Modal body content
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                Close
                </Button>
                <Button variant="primary" onClick={toggleModal}>
                Save Changes
                </Button>
            </Modal.Footer>
            </div>
        </Modal>
        </div>
    );
};

export default UseClick;
