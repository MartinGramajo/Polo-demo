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
            <Col md={12}>
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
                    Ver mas
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
                  <h6>{entry.descripcion4}</h6>
                </div>
                <div className="py-2">
                  <h4>{entry.titulo3}</h4>
                  <ul className="h6">
                    {entry.descripcionLista.split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="py-2">
                  <h4>{entry.titulolista2}</h4>
                  <h6>{entry.titulolista2descripcion}</h6>
                  <ol className="h6">
                    {entry.descripcionlista2.split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="py-2">
                  <h4>{entry.titulolista3}</h4>
                  <h6>{entry.titulolista3descripcion}</h6>
                  <ul className="h6">
                    {entry.descripcionlista3.split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="py-2">
                  <h4>{entry.titulo5}</h4>
                  <h6>{entry.descripcion5}</h6>
                </div>
                <div className="py-2">
                  <h4>{entry.titulolista4}</h4>
                  <h6>{entry.titulolista4descripcion}</h6>
                  <ul className="h6">
                    {entry.descripcionlista4.split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="py-2">
                  <h4>{entry.titulo6}</h4>
                  <h6>{entry.titulodescripcion6}</h6>
                </div>
                <div className="py-2">
                  <h4>References</h4>
                  <ul className="h6">
                    {entry.referencias.split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
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
