import { useState } from "react";
import Modal from "./Modal"; // Assuming Modal component is in the same directory
import "./styles.css";

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    };

    const onClose = () => {
        setShowModalPopup(false);
    };

    return (
        <>
            <h1>hello</h1>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {showModalPopup && (
                <Modal
                    header="Customized Header"
                    footer="Customized Footer"
                    onClose={onClose}
                    body="Customized Body"
                />
            )}
        </>
    );
};

export default ModalTest;
