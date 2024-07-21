import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoFR from "../components/BiografiaContenidoFR";

const EmpresaFR = () => {
  return (
    <div>
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenidoFR />
      </div>
    </div>
  );
};

export default EmpresaFR;
