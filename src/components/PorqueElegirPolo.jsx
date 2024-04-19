import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PorqueElegirPolo = () => {
  return (
    <section className=" bg-white">
      <div className="container">
        <div className="row  text-center my-5 text-dark">
          <h1
            className="text-center text-dark "
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            {" "}
            ¿ PORQUE ELEGIR POLO SALUD ?
          </h1>
          <h4 className="pb-5" style={{ fontSize: "20px", fontWeight: "bold" }}>
            {" "}
            Que te ofrecemos
          </h4>

          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-rojo"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h6 style={{ fontSize: "18px" }}>
                  Por qué al igual que los jugadores, lo que más nos importa es
                  el caballo, su salud, su rendimiento y su bienestar
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
                  Consideramos al caballo de polo como un deportista, por eso le
                  brindamos servicios que ayudan a mantenerlo saludable.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1  color-rojo "
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h6 style={{ fontSize: "18px" }}>
                  Tratamos al caballo de forma global para que pueda mantener su
                  rendimiento deportivo a lo largo del tiempo
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirPolo;
