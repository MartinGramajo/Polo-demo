import { Card } from "react-bootstrap";
import cliente from "../assets/img/slider18.png";
import cliente2 from "../assets/img/mapaMundi.png";
import cliente3 from "../assets/img/fracturacuello.jpg";
import { Link } from "react-router-dom";

export default function Cartas() {
  return (
    <div className="container animate__animated animate__backInLeft  montserrat-bold">
      <div className="cartas">
        <Card
          as={Link}
          to="/servicios"
          data-aos="zoom-in"
          data-aos-delay="0"
          className="carta cartas-gradiente text-white rounded-3 border border-dark bg-black text-decoration-none"
        >
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Img
              className="imagen-carta"
              src={cliente}
              alt="icono okay"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <h6>SERVICIOS</h6>
          </Card.Body>
        </Card>
        <Card
          as={Link}
          to="/como-trabajamos"
          data-aos="zoom-in"
          data-aos-delay="200"
          className="carta cartas-gradiente text-white rounded-3 border border-dark bg-black text-decoration-none"
        >
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Img
              className="imagen-carta"
              src={cliente2}
              alt="icono okay"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <h6>COMO TRABAJAMOS</h6>
          </Card.Body>
        </Card>
        <Card
          as={Link}
          to="/camara"
          data-aos="zoom-in"
          data-aos-delay="400"
          className="carta cartas-gradiente text-white rounded-3 border border-dark bg-black text-decoration-none"
        >
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Img
              className="imagen-carta"
              src={cliente3}
              alt="icono okay"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <h6> TERMOOGRAFÍA </h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
