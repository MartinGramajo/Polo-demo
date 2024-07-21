import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
import NavReactBiografia from "../components/common/NavReactBiografia";
import FooterBlog from "../components/common/FooterBlog";
import FooterBiografia from "../components/common/FooterBiografia";
const Empresa = () => {
  return (
    <div>
      <BannerEmpresa />
      <div className="py-4">
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
