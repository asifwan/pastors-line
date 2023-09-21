import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes.constants";
import { Form } from "react-bootstrap";

interface ICustomModal {
  show: boolean;
  onHide: any;
  CloseBtnVariant: "primary" | "secondary";
  children: JSX.Element[] | JSX.Element;
}

function CustomModal({
  show,
  onHide,
  CloseBtnVariant,
  children,
}: ICustomModal) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {children}
      <Modal.Footer>
        <Form.Check type="switch" id="custom-switch" label="Only even" />
        <div>
          <Link to={routes.AllContact}>
            <Button variant="primary" className="m-1">
              All Contact
            </Button>
          </Link>
          <Link to={routes.USContacts}>
            <Button variant="secondary" className="m-1">
              US Contacts
            </Button>
          </Link>
          <Button variant={CloseBtnVariant} onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
