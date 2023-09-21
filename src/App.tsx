import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Button } from "react-bootstrap";
import CustomModal from "./components/Modal";

function App() {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  return (
    <div className="App">
      <Button variant="primary" onClick={() => setShowModalA(true)}>
        All Contacts
      </Button>{" "}
      <Button variant="secondary" onClick={() => setShowModalB(true)}>
        US Contacts
      </Button>{" "}
      <CustomModal
        btnVariant="primary"
        show={showModalA}
        onHide={() => setShowModalA(false)}
      />
      <CustomModal
        btnVariant="secondary"
        show={showModalB}
        onHide={() => setShowModalB(false)}
      />
    </div>
  );
}

export default App;
