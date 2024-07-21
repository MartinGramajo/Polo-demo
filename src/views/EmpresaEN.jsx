import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoEN from "../components/BiografiaContenidoEN";
import NavReactEN from "../components/common/NavReactEN";

const EmpresaEN = () => {
  return (
    <div>
      <NavReactEN />
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenidoEN />
      </div>
    </div>
  );
};

export default EmpresaEN;
