import { Image, Nav } from "react-bootstrap";
import logoNuevo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import linken from "../../assets/img/linken.png";
import insta from "../../assets/img/insta.png";
import wsp from "../../assets/img/wasa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function FooterEN() {
  return (
    <div className=" text-white bg-dark text-white mt-auto  ">
      <div className="px-4 pt-4 container">
        <div className="row">
          {/* Column1 */}
          <div className="col-12 col-lg-4 text-md-start d-flex justify-content-lg-start justify-content-center mt-md-0 ">
            <ul className="list-unstyled">
              <li className="text-center pt-3">
                <Image
                  className="tamaño-logo-footer"
                  src={logoNuevo}
                  alt="logoHotel"
                  fluid
                />
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-12 col-lg-4 text-md-start d-flex justify-content-center   ">
            <ul className="list-unstyled my-5">
              <li>
                <section className="justify-content-center d-flex ">
                  <div className="mx-2 ">
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
                  <div>
                    <a
                      className="mx-2"
                      href="https://wa.link/60nlhz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image className="iconos-nav" src={wsp} alt="wsp" fluid />
                    </a>
                  </div>
                </section>
                <p className="tamaño-chico text-center  mt-2 mb-0 montserrat-regular">
                  <FontAwesomeIcon icon={faPhone} /> +34 650 032 819 <br />
                  <FontAwesomeIcon icon={faEnvelope} /> malujanarias@gmail.com
                  <br />
                </p>
              </li>
            </ul>
          </div>
          {/* Column3 */}

          <div className="col-12 col-lg-4  text-center   mb-1 mt-3 p-1 ">
            <Nav className=" mt-sm-0  flex-column  ">
              <Nav.Link
                to="/home-en"
                as={NavLink}
                className="text-white mx-xl-2 my-auto nav-links"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                to="/services"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                to="/how-we-work"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                HOW WE WORK
              </Nav.Link>
              <Nav.Link
                to="/about/us"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                ABOUT US
              </Nav.Link>

              <Nav.Link
                to="/blog-en"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                to="/contact"
                as={NavLink}
                className="text-white mx-xl-2 my-auto nav-links"
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
      <div className="p-2 color-gris-fondo ">
        <div className="text-center tamaño-chico  text-md-start my-2 d-flex justify-content-center  ">
          <a
            className="text-decoration-none text-white"
            href="https://www.dkzstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Produced by DKZ Studio &copy; {new Date().getFullYear()}
            </span>
            <span> All rights reserved</span>
          </a>
        </div>
      </div>
    </div>
  );
}
