import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
const Empresa = () => {
  return (
    <div>
      <BannerEmpresa />

      {/* <div className="container py-2 animate__animated  animate__backInUp text-white">
        <h2 className=" lato-regular text-dark" style={{ fontSize: "18px" }}>
          María Lujan Arias Osteópata <br />
        </h2>
      </div> */}
      <h4
        style={{ fontSize: "24px" }}
        className="pt-4 container montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
      >
        MI HISTORIA
      </h4>
      <div className="py-4">
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
