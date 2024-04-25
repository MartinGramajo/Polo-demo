import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoNuevo from "../../assets/img/logo.png";

const NavReact = () => {
  function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      className="bg-dark"
    >
      <Container>
        <div className="d-block d-lg-none mx-2">
          <Navbar.Brand href="/" className=" mx-2">
            <Image src={logoNuevo} alt="logo 1" className="tamaño-logo" fluid />
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavReact;
