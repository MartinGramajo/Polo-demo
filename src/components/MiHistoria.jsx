import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function MiHistoria() {
  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <Button
          onClick={() => setOpen(!open)}
          className={
            open
              ? `d-none ver-mas-btn-sidebar text-white montserrat-regular`
              : `d-block ver-mas-btn-sidebar text-white montserrat-regular`
          }
          aria-controls="MiHistoria-collapse-text"
          aria-expanded={open}
        >
          Conocé más de su historia
        </Button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="container text-dark montserrat-regular">
            <h4
              style={{ fontSize: "24px" }}
              className="pt-4  montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
            >
              MI HISTORIA
            </h4>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp ">
                Maria Lujan Arias nació el 19 de noviembre de 1982 en Buenos
                Aires en una familia que siempre tuvo contacto con el campo y
                los caballos y a la vez que inculcaron en ella una vida citadina
                en la capital para darle la posibilidad de formarse.
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp ">
                De estar en contacto con caballos en la provincia de Buenos
                Aires, a elegir una vida más citadina estudiando abogacía en la
                UBA y trabajar en el poder judicial al mismo tiempo que
                comenzaba una carrera de bailarina de danza contemporánea que la
                hizo mudarse a Europa a los 22 años, es que Maria Luján llegó a
                la Osteopatía y decidió formarse en ello.
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp">
                Quienes la conocen puEden dar cuenta que Maria Luján siempre
                persigió sus sueños, y con paso firme, terminó formándose en las
                mejores instituciones educativas y transformarse en una
                profesional en el ámbito de la Osteopatía humana y equina.
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp">
                Durante 10 años dirigió su propia clínica acompañando el
                desempeño, rendimiento y calidad de vida de sus pacientes y
                desde el 2024 creó la empresa PoloSalud, para poder concentrar
                todo su trabajo en ella y ofrecer sus servicios tanto a los
                jugadores y sus caballos.
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 aanimate__animated  animate__fadeInUp">
                Además de Osteópata Diplomada es auxiliar veterinario
                especializada en fisoterapia y rehabilitación equina, pionera en
                el uso de cámaras termográficas en el deporte, docente de
                Osteopatía en América Latina y Europa, y traductora y asistente
                de la Osteópata Canadiense Nathalie Camirand.
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 pb-5 animate__animated  animate__fadeInUp">
                Actualmente y con sus muchos movimientos de países, reside junto
                a su familia en España y se traslada para brindar sus servicios
                profesionales para deportistas y las mejores organizaciones de
                polo, así como, desarrollar sus capacidades a nivel docente.
              </h6>
            </div>
          </div>
          <section className="d-flex justify-content-center flex-wrap">
            <div className="text-center pb-4 mx-4">
              <button
                className="ver-mas-btn-sidebar text-white montserrat-regular"
                onClick={handleHomeClick}
              >
                VOLVER AL HOME
              </button>
            </div>
          </section>
        </div>
      </Collapse>
    </>
  );
}

export default MiHistoria;
