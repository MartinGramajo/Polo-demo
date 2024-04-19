import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider8.png";
import bannerServiciosCuadrado from "../assets/img/slider8.png";
const BannerEmpresa = () => {
  return (
    <>
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
    </>
  );
};

export default BannerEmpresa;
