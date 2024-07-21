import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoEN from "../components/BiografiaContenidoEN";

const EmpresaEN = () => {
  return (
    <div>
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenidoEN />
      </div>
    </div>
  );
};

export default EmpresaEN;
