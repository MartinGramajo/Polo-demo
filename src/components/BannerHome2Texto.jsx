import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider2.png";
import bannerServiciosCuadrado from "../assets/img/slider2.png";

const BannerHome2Texto = ({ translations, language }) => {
  const getTranslation = (key) => {
    const translationKey = `${key}Home${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div>
      <div className="bannerContainer d-none d-md-block">
        <Image
          src={bannerServicios}
          className="bannerImage"
          alt="inicio banner"
        />
      </div>
      <div className=" d-md-none d-block">
        <Image
          src={bannerServiciosCuadrado}
          className="bannerImage"
          alt="inicio banner"
        />
      </div>
      <div className="textOverlay">
        <article className=" banner-text text-white title">
          <h1>{getTranslation("titulo")}</h1>
        </article>
      </div>
    </div>
  );
};

export default BannerHome2Texto;
