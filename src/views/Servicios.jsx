import BannerServicios from "../components/BannerServicios";

const Servicios = () => {
  return (
    <div>
      <BannerServicios />
      <article className="container py-4 " style={{ textAlign: "start" }}>
        <div className=" py-4">
          <h1
            className="text-center animate__animated  animate__fadeInLeft"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            {" "}
            Servicios de Vanguardia para el Bienestar del Caballo de Polo
          </h1>
        </div>
        <article>
          <div className="row animate__animated  animate__fadeInRight">
            <div className="col-lg-6  col-12">
              <h4 style={{ fontSize: "22px", fontWeight: "bold" }}>
                Plan Polo Salud:
              </h4>
              <h5 style={{ fontSize: "18px" }}>
                Evaluamos los caballos mediante cámara termo gráfica y métodos
                de palpación precisos, los cuales nos permiten establecer un
                plan de tratamiento osteopático de recuperación y mantenimiento.
                Esto se integra perfectamente en el manejo diario de los
                caballos. Asimismo ofrecemos servicios de osteopatía para los
                jugadores, aliviando tensiones musculares y recuperando la
                movilidad funcional de las estructuras músculo esqueléticas
                solicitadas durante la temporada.
              </h5>
            </div>
            <div className="col-lg-6  col-12">
              <h4 style={{ fontSize: "22px", fontWeight: "bold" }}>
                Plan Mantenimiento Polo Salud:
              </h4>
              <h5 style={{ fontSize: "18px" }}>
                Establecemos un plan de seguimiento y mantenimiento de los
                equinos, analizando la biomecánica funcional y estructuras
                músculo esquelética de los caballos mediante palpación manual
                precisa y análisis de las imágenes térmicas profesionales. Esto
                se integra perfectamente en el manejo diario de los caballos.
                Asimismo, brindamos soporte osteopático a los jugadores,
                aliviando tensiones musculares y recuperando la movilidad
                funcional de las estructuras músculo esqueléticas solicitadas
                durante la temporada.
              </h5>
            </div>
          </div>
        </article>
      </article>
    </div>
  );
};

export default Servicios;
