import React, { useEffect } from "react";
import CustomModal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { closeModal, openModal } from "../store/actions/modalActions";
import { Modal } from "react-bootstrap";

const AllContacts = () => {
  useEffect(() => {
    dispatch(openModal("modalA"));
  }, []);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals["modalA"]);
  return (
    <CustomModal
      CloseBtnVariant="primary"
      show={isOpen}
      onHide={() => dispatch(closeModal("modalA"))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          All Contacts
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

export default AllContacts;
