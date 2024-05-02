import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider2.png";
import bannerServiciosCuadrado from "../assets/img/slider2.png";

const BannerHome2Texto = () => {
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
      {/* <div className="textOverlay">
        <h6
          className="text-center montserrat-bold"
          style={{ fontSize: "32px" }}
        >
          OPTIMIZE EQUINE PERFORMANCE: <br />
          YOUR PARTNER IN POLO EXCELLENCE
        </h6>
      </div> */}
    </div>
  );
};

export default BannerHome2Texto;
