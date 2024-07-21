import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
import NavReactBiografia from "../components/common/NavReactBiografia";
const Empresa = () => {
  return (
    <div>
      <NavReactBiografia />
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
