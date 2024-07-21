import React, { useContext, useState } from "react";
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
import es from "../../assets/es.png";
import en from "../../assets/en.png";
import fr from "../../assets/fr.png";
import { LanguageContextContact } from "../../context/LanguageContextContact";

const NavReactContacto = () => {
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

  const { language, setLanguage } = useContext(LanguageContextContact);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="bg-dark montserrat-regular"
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
            <Nav className="ms-auto ms-auto d-flex justify-content-center align-items-center">
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
            </Nav>
            <div>
              <Button
                className="mx-2 btn-banderas"
                onClick={() => handleLanguageChange("es")}
              >
                <Image src={es} alt="logo 1" className="tamaño-logo" fluid />
              </Button>
              <Button
                onClick={() => handleLanguageChange("en")}
                className="mx-2 btn-banderas"
              >
                <Image src={en} alt="logo 1" className="tamaño-logo" fluid />
              </Button>
              <Button
                className="mx-2 btn-banderas"
                onClick={() => handleLanguageChange("fr")}
              >
                <Image src={fr} alt="logo 1" className="tamaño-logo" fluid />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavReactContacto;
