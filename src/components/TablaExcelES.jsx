import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Card, Button, Modal, Row, Col, Spinner, Alert } from "react-bootstrap";

const TablaExcelES = () => {
  const [blogEntries, setBlogEntries] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQE_h2WrQmc1UBOIfbv6IPTC2AslXov0KGs3ISOR8wNFB_76tI_bxejBJ5QJGoKbfOT4w8N49LVO8QE/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        setBlogEntries(parsedData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  const handleOpenDetailModal = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseDetailModal = () => {
    setSelectedIndex(null);
  };

  const splitText = (text, delimiter = "\n") => {
    return text
      .split(delimiter)
      .filter((item) => item.trim() !== "")
      .map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div className="blog-page container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status" className="mx-auto mt-5">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : blogEntries.length === 0 ? (
        <Alert variant="info" className="mx-auto mt-5">
          No hay notas cargadas aún.
        </Alert>
      ) : (
        <Row>
          {blogEntries.map((entry, index) => (
            <Col key={index} md={6} xs={12} className="mb-3">
              <Card className="blog-card">
                <Card.Img
                  variant="top"
                  src={entry.foto}
                  alt={entry.titulo}
                  className="blog-card-img"
                />
                <Card.Body>
                  <Card.Title>{entry.titulo}</Card.Title>
                  <Card.Text>{entry.descripcion}</Card.Text>
                  <Button
                    className="ver-mas-btn-sidebar text-white montserrat-bold"
                    onClick={() => handleOpenDetailModal(index)}
                  >
                    Ver más
                  </Button>
                </Card.Body>
              </Card>

              {/* Modal de detalles */}
              <Modal
                className="modal-xl"
                show={index === selectedIndex}
                onHide={handleCloseDetailModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{entry.titulo1}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h6>{entry.descripcion1}</h6>
                  <div className="py-2">
                    <h4>{entry.titulo2}</h4>
                    <h6>{entry.descripcion2}</h6>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulo4}</h4>
                    <ul className="h6">{splitText(entry.descripcion4)}</ul>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulolista2}</h4>
                    <h6>{entry.titulolista2descripcion}</h6>
                    <ol className="h6">{splitText(entry.descripcionlista2)}</ol>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulolista3}</h4>
                    <h6>{entry.titulolista3descripcion}</h6>
                    <ul className="h6">{splitText(entry.descripcionlista3)}</ul>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulo5}</h4>
                    <h6>{entry.descripcion5}</h6>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulolista4}</h4>
                    <h6>{entry.titulolista4descripcion}</h6>
                    <ul className="h6">{splitText(entry.descripcionlista4)}</ul>
                  </div>
                  <div className="py-2">
                    <h4>{entry.titulo6}</h4>
                    <h6>{entry.titulodescripcion6}</h6>
                  </div>
                  <div className="py-2">
                    <h4>References</h4>
                    <ul className="h6">{splitText(entry.referencias)}</ul>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseDetailModal}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default TablaExcelES;
