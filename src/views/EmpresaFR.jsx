import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoFR from "../components/BiografiaContenidoFR";
import NavReactFR from "../components/common/NavReactFR";

const EmpresaFR = () => {
  return (
    <div>
      <NavReactFR />
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenidoFR />
      </div>
    </div>
  );
};

export default EmpresaFR;
