import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoFR from "../components/BiografiaContenidoFR";
import NavReactFR from "../components/common/NavReactFR";
import FooterFR from "../components/common/FooterFR";
import FotoTextoDinamicoFR from "../components/FotoTextoDinamicoFR";

const EmpresaFR = () => {
  return (
    <div>
      <NavReactFR />
      <BannerEmpresa />
      <div className="py-4 padding-lr-responsive">
        <BiografiaContenidoFR />
      </div>
      <div className="padding-lr-responsive">
        <FotoTextoDinamicoFR />
      </div>
      <FooterFR />
    </div>
  );
};

export default EmpresaFR;
