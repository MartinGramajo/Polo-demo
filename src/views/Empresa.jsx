import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
import NavReactES from "../components/common/NavReactES";
import Footer from "../components/common/Footer";
import FotoTextoDinamico from "../components/FotoTextoDinamico";
const Empresa = () => {
  return (
    <div>
      <NavReactES />
      <BannerEmpresa />
      <div className="py-4 padding-lr-responsive">
        <BiografiaContenido />
      </div>
      <div className="padding-lr-responsive">
        <FotoTextoDinamico />
      </div>
      <Footer />
    </div>
  );
};

export default Empresa;
