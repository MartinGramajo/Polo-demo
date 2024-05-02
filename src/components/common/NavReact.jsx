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
                to="/quien/soy"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                QUIENES SOMOS
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
                to="/servicios"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contacto"
                onClick={cerrar}
                className="tamaño-medium color-blanco mx-2 my-auto"
              >
                CONTACTO
              </Nav.Link>
              <div className="d-lg-block d-none">
                <Button
                  className=" position-fixed  top-0 end-0 m-3 border-0"
                  style={{ backgroundColor: "#FE2D30" }}
                  onClick={handleShow}
                >
                  <Image src={mundito} alt="logo 1" className="" fluid />
                </Button>

                <Offcanvas
                  className="text-white"
                  style={{ backgroundColor: "#595C5F" }}
                  show={show}
                  onHide={handleClose}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ENCONTRANOS EN EL MUNDO</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <h6>
                      Tenemos caballerizas en los principales spots de Polo
                      alrededor del mundo. Contactanos para contratar nuestros
                      servicios
                    </h6>

                    <div className="py-4">
                      <h5>● ESPAÑA </h5>
                      <h5>● ARGENTINA</h5>
                      <h5>● INGLATERRA</h5>
                      <h5>● FRANCIA</h5>
                    </div>
                    <div>
                      <h6>
                        Mándanos tu consulta y nos pondremos en contacto para
                        asesorarte según tus necesidades.
                      </h6>
                    </div>
                    <div className="text-center py-5">
                      <button
                        className="ver-mas-btn-sidebar text-white"
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
