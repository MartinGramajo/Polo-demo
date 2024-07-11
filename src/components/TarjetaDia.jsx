// src/components/TarjetaDia.js
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const TarjetaDia = ({ dia, datos, descripcion }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{dia}</Card.Title>
          <Card.Text>
            Dia 1: {datos.dia1}
            <br />
            Dia 2: {datos.dia2}
            <br />
            Dia 3: {datos.dia3}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Ver Detalle
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle del {dia}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{descripcion}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TarjetaDia;
