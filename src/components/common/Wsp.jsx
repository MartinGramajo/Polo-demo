import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import wsp from "../../assets/img/flechaArriba.png";

export default function Wsp() {
  return (
    <div className="d-flex justify-content-center">
      <div className="navbar-bordes">
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={100}
          className="fixed-bottom ms-auto mb-5 me-4"
          style={{ cursor: "pointer" }}
        >
          <Image
            className="icono-wsp fixed-bottom ms-auto mb-5 me-4"
            src={wsp}
            alt="wsp"
            fluid
          />
        </Link>
      </div>
    </div>
  );
}
