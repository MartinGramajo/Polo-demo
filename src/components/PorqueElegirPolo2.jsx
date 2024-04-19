import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PorqueElegirPolo2 = () => {
  return (
    <section className=" bg-white">
      <div className="container">
        <div className="row  text-center text-dark">
          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1  color-rojo"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h6 style={{ fontSize: "18px" }}>
                  Solo utilizamos técnicas manuales, sin efectos secundarios y
                  que no se consideran doping en ningún país, por lo tanto
                  pueden aplicarse antes, durante o después de un partido.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1  color-rojo"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h6 style={{ fontSize: "18px" }}>
                  Somos internacionales. Nos desplazamos “in situ”, donde la
                  caballada este y elaboramos un plan de tratamiento único para
                  cada organización.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1  color-rojo"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h6 style={{ fontSize: "18px" }}>
                  Trabajamos en equipo. Desde el día uno, nos ponemos en
                  contacto y al servicio de los demás profesionales que hacen al
                  cuidado del caballo (veterinarios, herradores, dentistas, etc)
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirPolo2;
