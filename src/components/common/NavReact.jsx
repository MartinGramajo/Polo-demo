import React, { useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoNuevo from "../../assets/img/logo.png";
import mundito from "../../assets/img/iconomundo.png";

const NavReact = () => {
  function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContactClick = () => {
    window.location.href = "#/contacto"; // Redirecciona a la página de contacto
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="bg-dark montserrat-regular "
      >
        <Container>
          <div className="d-block d-lg-none mx-2">
            <Navbar.Brand href="/" className="mx-2">
              <Image
                src={logoNuevo}
                alt="logo 1"
                className="tamaño-logo"
                fluid
              />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto d-flex justify-content-center align-items-center">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/servicios"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/como-trabajamos"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                CÓMO TRABAJAMOS
              </Nav.Link>
              <div className="d-lg-block d-none mx-2">
                <Navbar.Brand href="/" className="mx-2">
                  <Image
                    src={logoNuevo}
                    alt="logo 2"
                    className="tamaño-logo"
                    fluid
                  />
                </Navbar.Brand>
              </div>
              <Nav.Link
                as={NavLink}
                to="/quien/soy"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                QUIENES SOMOS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/blog"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                NOTAS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contacto"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                CONTACTO
              </Nav.Link>
              <div className="d-block d-xl-none">
                <Button
                  className="border-0"
                  style={{ backgroundColor: "#FE2D30" }}
                  onClick={handleShow}
                >
                  <Image src={mundito} alt="logo 1" className="w-50" fluid />
                </Button>
              </div>
              <div className="d-xl-block d-none">
                <Button
                  className=" position-fixed  top-0 end-0 m-3 border-0"
                  style={{ backgroundColor: "#FE2D30" }}
                  onClick={handleShow}
                >
                  <Image src={mundito} alt="logo 1" className="w-50" fluid />
                </Button>

                <Offcanvas
                  className="text-white"
                  style={{ backgroundColor: "#595C5F" }}
                  show={show}
                  onHide={handleClose}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="montserrat-bold">
                      ENCONTRANOS EN EL MUNDO
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="py-4">
                      <h5 className="montserrat-bold">● ESPAÑA </h5>
                      <h5 className="montserrat-bold">● ARGENTINA</h5>
                      <h5 className="montserrat-bold">● INGLATERRA</h5>
                      <h5 className="montserrat-bold">● FRANCIA</h5>
                    </div>
                    <div className="text-center py-5">
                      <button
                        className="ver-mas-btn-sidebar text-white montserrat-bold"
                        onClick={handleContactClick}
                      >
                        CONTACTO
                      </button>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavReact;
