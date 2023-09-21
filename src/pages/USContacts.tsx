import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../store/actions/modalActions";
import CustomModal from "../components/Modal";
import { RootState } from "../store";
import { Modal } from "react-bootstrap";

const USContacts = () => {
  useEffect(() => {
    dispatch(openModal("modalB"));
  }, []);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals["modalB"]);
  return (
    <CustomModal
      CloseBtnVariant="primary"
      show={isOpen}
      onHide={() => dispatch(closeModal("modalB"))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          US Contacts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </CustomModal>
  );
};

export default USContacts;
