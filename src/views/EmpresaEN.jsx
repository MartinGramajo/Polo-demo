import BannerEmpresa from "../components/BannerEmpresa";
import "animate.css";
import BiografiaContenidoEN from "../components/BiografiaContenidoEN";
import NavReactEN from "../components/common/NavReactEN";
import FooterEN from "../components/common/FooterEN";

const EmpresaEN = () => {
  return (
    <div>
      <NavReactEN />
      <BannerEmpresa />
      <div className="py-4 padding-lr-responsive">
        <BiografiaContenidoEN />
      </div>
      <div className="mt-auto">
        <FooterEN />
      </div>
    </div>
  );
};

export default EmpresaEN;
