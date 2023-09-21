import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "./Modal";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes.constants";

const ContactButtons = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  return (
    <Fragment>
      <Link to={routes.AllContact}>
        <Button variant="primary" onClick={() => setShowModalA(true)}>
          Modal A
        </Button>
      </Link>
      <Link to={routes.USContacts}></Link>
      <Button variant="secondary" onClick={() => setShowModalB(true)}>
        Modal B
      </Button>
      <CustomModal
        CloseBtnVariant="primary"
        show={showModalA}
        onHide={() => setShowModalA(false)}
      />
      <CustomModal
        CloseBtnVariant="secondary"
        show={showModalB}
        onHide={() => setShowModalB(false)}
      />
    </Fragment>
  );
};

export default ContactButtons;
