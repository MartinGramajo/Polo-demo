import React, { useContext, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoNuevo from "../../assets/img/logo.png";
import es from "../../assets/es.png";
import en from "../../assets/en.png";
import fr from "../../assets/fr.png";
import { LanguageContext } from "../../context/LanguageContext";

const NavReactEN = () => {
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

  const { language, setLanguage } = useContext(LanguageContext);

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
            <Navbar.Brand href="/home-en" className="mx-2">
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
              <Nav className="d-flex justify-content-center align-items-center">
                <Nav.Link
                  as={NavLink}
                  to="/home-en"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  SERVICES
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/how-we-work"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  HOW WE WORK
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/home-en"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto d-none d-lg-block"
                >
                  <Image
                    src={logoNuevo}
                    alt="logo 1"
                    className="tamaño-logo"
                    fluid
                  />
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about/us"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  ABOUT US
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/blog-en"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  BLOG
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  onClick={cerrar}
                  className="tamaño-medium color-blanco mx-2 my-auto"
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Nav.Link className="mx-2 btn-banderas" as={NavLink} to="/">
                <Image src={es} alt="logo 1" className="tamaño-logo" fluid />
              </Nav.Link>
              <Nav.Link
                className="mx-2 btn-banderas"
                as={NavLink}
                to="/home-en"
              >
                <Image src={en} alt="logo 1" className="tamaño-logo" fluid />
              </Nav.Link>
              <Nav.Link
                className="mx-2 btn-banderas"
                as={NavLink}
                to="/home-fr"
              >
                <Image src={fr} alt="logo 1" className="tamaño-logo" fluid />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavReactEN;
