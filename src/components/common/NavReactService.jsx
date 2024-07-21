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
import { LanguageContextService } from "../../context/LanguageContextService";

const NavReactService = () => {
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

  const { language, setLanguage } = useContext(LanguageContextService);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const renderNav = () => {
    if (language === "es") {
      return (
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            HOME
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
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto d-none d-lg-block"
          >
            <Image src={logoNuevo} alt="logo 1" className="tamaño-logo" fluid />
          </Nav.Link>
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
            BLOG
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
      );
    } else if (language === "en") {
      return (
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            HOME
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/servicios"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            SERVICES
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/como-trabajamos"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            HOW WE WORK
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto d-none d-lg-block"
          >
            <Image src={logoNuevo} alt="logo 1" className="tamaño-logo" fluid />
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/quien/soy"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            ABOUT US
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            BLOG
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contacto"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            CONTACT
          </Nav.Link>
        </Nav>
      );
    } else {
      return (
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            HOME
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/servicios"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            SERVICES
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/como-trabajamos"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            HOW WE WORK
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto d-none d-lg-block"
          >
            <Image src={logoNuevo} alt="logo 1" className="tamaño-logo" fluid />
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/quien/soy"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            ABOUT US
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            BLOG
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contacto"
            onClick={cerrar}
            className="tamaño-medium color-blanco mx-2 my-auto"
          >
            CONTACT
          </Nav.Link>
        </Nav>
      );
    }
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
            <div className="d-flex flex-grow-1 justify-content-center">
              {renderNav()}
            </div>
            <div className="d-flex justify-content-center mt-2">
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

export default NavReactService;
