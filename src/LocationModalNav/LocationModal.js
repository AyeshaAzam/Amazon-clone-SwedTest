import React from "react";
import "./LocationModal.css";
import Modal from "@material-ui/core/Modal";

/*************************************************************
this modal component is not working when I used inside Header.js
have to ask someone how I can use this component from Header.js
*************************************************************/

const LocationModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev); // just toggling the modal
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="locationModal">
      <div className="locationModal__container">
        <button
          className="locationModa__btn"
          type="button"
          onClick={handleOpen}
        >
          Enter Address
        </button>
        <Modal
          className="locationModal__modal"
          open={open}
          onClose={handleClose}
        >
          <h1>Enter your Address information</h1>
        </Modal>
      </div>
    </div>
  );
};

export default LocationModal;
