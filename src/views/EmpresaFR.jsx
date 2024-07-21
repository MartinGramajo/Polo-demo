import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoFR from "../components/BiografiaContenidoFR";
import NavReactFR from "../components/common/NavReactFR";
import FooterFR from "../components/common/FooterFR";

const EmpresaFR = () => {
  return (
    <div>
      <NavReactFR />
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenidoFR />
      </div>
      <FooterFR />
    </div>
  );
};

export default EmpresaFR;
