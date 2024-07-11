import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { Card, Button, Modal, Row, Col, Spinner, Alert } from "react-bootstrap";

const BlogPage = () => {
  const [blogEntries, setBlogEntries] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3dibSLzlpVDUXj1iCUC0v5Pce9PBVEwDWFnpIG4SkSHeiIc3euTIATppVN8FhYJFCtLtzNAsnR9jW/pub?output=csv"
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

  return (
    <div className="blog-page container d-flex flex-wrap">
      {loading ? (
        <Spinner animation="border" role="status" className="mx-auto mt-5">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : blogEntries.length === 0 ? (
        <Alert variant="info" className="mx-auto mt-5">
          No hay notas cargadas aún.
        </Alert>
      ) : (
        blogEntries.map((entry, index) => (
          <Row key={index} className="mb-3">
            <Col md={4}>
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src={entry.foto} alt={entry.titulo} />
                <Card.Body>
                  <Card.Title>{entry.titulo}</Card.Title>
                  <Card.Text>{entry.descripcion}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleOpenDetailModal(index)}
                  >
                    Ver detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Modal de detalles */}
            <Modal
              className="modal-xl"
              show={index === selectedIndex}
              onHide={handleCloseDetailModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Detalles</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>{entry.titulo1}</h3>
                <p>{entry.descripcion1}</p>
                <h3>{entry.titulo2}</h3>
                <p>{entry.descripcion2}</p>
                <h3>{entry.titulo3}</h3>
                <ul>
                  {entry.descripcionLista.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* Repetir para todos los títulos y descripciones adicionales */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetailModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        ))
      )}
    </div>
  );
};

export default BlogPage;
