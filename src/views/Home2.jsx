import "animate.css";
import BannerHome2Texto from "../components/BannerHome2Texto";
import Cartas from "../components/Cartas";
import ContactoContenido from "../components/ContactoContenido";

const Home2 = () => {
  return (
    <div>
      <BannerHome2Texto />
      <article className="pt-4 container  d-none d-lg-block">
        <h6 className=" montserrat-bold" style={{ fontSize: "24px" }}>
          OPTIMIZAR EL RENDIMIENTO EQUINO: <br />
          SU SOCIO EN LA EXCELENCIA DEL POLO
        </h6>
      </article>
      <article className="pt-4 container  d-lg-none d-block">
        <h6 className=" montserrat-bold" style={{ fontSize: "18px" }}>
          OPTIMIZAR EL RENDIMIENTO EQUINO: <br />
          SU SOCIO EN LA EXCELENCIA DEL POLO
        </h6>
      </article>
      <article className="pt-4 container d-none d-lg-block">
        <h6 className=" montserrat-regular " style={{ fontSize: "20px" }}>
          Descubra cómo Polo Salud puede integrarse perfectamente con su equipo
          para mejorar el rendimiento, la salud y el bienestar de su caballo de
          polo.
        </h6>
        <h6 className="montserrat-bold " style={{ fontSize: "20px" }}>
          Experimente los servicios personalizados de osteopatía equina y
          termografía por infrarrojos de Polo Salud, diseñados para optimizar el
          rendimiento del caballo de polo y prevenir lesiones.
        </h6>
      </article>
      <article className="pt-4 container d-lg-none d-block">
        <h6 className=" montserrat-regular " style={{ fontSize: "16px" }}>
          Descubra cómo Polo Salud puede integrarse perfectamente con su equipo
          para mejorar el rendimiento, la salud y el bienestar de su caballo de
          polo.
        </h6>
        <h6 className="montserrat-bold " style={{ fontSize: "16px" }}>
          Experimente los servicios personalizados de osteopatía equina y
          termografía por infrarrojos de Polo Salud, diseñados para optimizar el
          rendimiento del caballo de polo y prevenir lesiones.
        </h6>
      </article>
      <article className="pb-5">
        <Cartas />
      </article>
      <article className="pb-5">
        <ContactoContenido />
      </article>
    </div>
  );
};

export default Home2;
