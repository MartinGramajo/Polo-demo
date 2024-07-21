import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
import NavReactES from "../components/common/NavReactES";
const Empresa = () => {
  return (
    <div>
      <NavReactES />
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
