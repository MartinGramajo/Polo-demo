import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NuestrosRecursos = () => {
  return (
    <section className="bg-color-rojo">
      <div className="container">
        {/* <h1
            className="text-center text-white py-4"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            {" "}
            VALORES{" "}
          </h1> */}
        <div className="row text-white text-center my-5 py-5">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="valor-item">
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-gris"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  CONOCIMIENTO{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="valor-item">
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-gris"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  TRABAJO EN EQUIPO{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <div className="valor-item">
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-gris"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  EFICIENCIA Y BIENESTAR{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosRecursos;
