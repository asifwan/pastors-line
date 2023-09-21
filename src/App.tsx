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
      <Button variant="outline-primary" onClick={() => setShowModalA(true)}>
        Primary
      </Button>{" "}
      <Button variant="outline-secondary" onClick={() => setShowModalB(true)}>
        Secondary
      </Button>{" "}
      <CustomModal show={showModalA} onHide={() => setShowModalA(false)} />
      <CustomModal show={showModalB} onHide={() => setShowModalB(false)} />
    </div>
  );
}

export default App;
