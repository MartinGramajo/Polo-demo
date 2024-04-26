import BannerServicios from "../components/BannerServicios";

const Servicios = () => {
  return (
    <div style={{ backgroundColor: "#191919" }}>
      <BannerServicios />
      <article className="container py-4 " style={{ textAlign: "start" }}>
        <div className=" py-4">
          <h1
            className="text-center animate__animated  animate__fadeInLeft text-white"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            {" "}
            Servicios de Vanguardia para el Bienestar del Caballo de Polo
          </h1>
        </div>
        <article className="container">
          <div className="row animate__animated  animate__fadeInUp">
            <ol className="text-white" style={{ fontSize: "18px" }}>
              <li>
                <strong>Plan Polo Salud:</strong>
                <ul className="py-4">
                  <li>
                    <strong>Evaluación:</strong> Evaluamos los caballos mediante
                    cámara termográfica y métodos de palpación precisos, los
                    cuales nos permiten establecer un plan de tratamiento
                    osteopático de recuperación y mantenimiento.
                  </li>
                  <li>
                    <strong>Integración y Servicios:</strong> Esto se integra
                    perfectamente en el manejo diario de los caballos. Asimismo,
                    ofrecemos servicios de osteopatía para los jugadores,
                    aliviando tensiones musculares y recuperando la movilidad
                    funcional de las estructuras músculo esqueléticas
                    solicitadas durante la temporada.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Plan Mantenimiento Polo Salud:</strong>
                <ul className="py-4">
                  <li>
                    <strong>Seguimiento y Mantenimiento:</strong> Establecemos
                    un plan de seguimiento y mantenimiento de los equinos,
                    analizando la biomecánica funcional y estructuras músculo
                    esquelética de los caballos mediante palpación manual
                    precisa y análisis de las imágenes térmicas profesionales.
                  </li>
                  <li>
                    <strong>Integración y Soporte Osteopático:</strong> Esto se
                    integra perfectamente en el manejo diario de los caballos.
                    Asimismo, brindamos soporte osteopático a los jugadores,
                    aliviando tensiones musculares y recuperando la movilidad
                    funcional de las estructuras músculo esqueléticas
                    solicitadas durante la temporada.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </article>
      </article>
    </div>
  );
};

export default Servicios;
