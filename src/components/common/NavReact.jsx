import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoNuevo from "../../assets/img/logo.png";
import linken from "../../assets/img/linken.png";
import insta from "../../assets/img/insta.png";

const NavReact = () => {
  function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className=" bg-dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="my-4">
              <img className="tamaño-logo" src={logoNuevo} alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto mt-2 mt-sm-0">
              <Nav.Link
                to="/"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                to="/quien/soy"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                QUIENES SOMOS{" "}
              </Nav.Link>
              <Nav.Link
                to="/servicios"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                SERVICIOS
              </Nav.Link>

              <Nav.Link
                to="/contacto"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                CONTACTO
              </Nav.Link>
              <section className="ms-auto d-flex">
                <div className="mx-2">
                  <a
                    href="https://www.instagram.com/polo_salud?igsh=eGMxaGNyOW05c2Fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Image
                      className="iconos-nav"
                      src={insta}
                      alt="instagram"
                      fluid
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="https://www.linkedin.com/company/polo-salud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Image
                      className="iconos-nav"
                      src={linken}
                      alt="linken"
                      fluid
                    />
                  </a>
                </div>
              </section>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavReact;
