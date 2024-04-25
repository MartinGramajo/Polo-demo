import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import "animate.css";
const Empresa = () => {
  return (
    <div style={{ backgroundColor: "#191919" }}>
      <BannerEmpresa />

      <div className=" text-center py-2 animate__animated  animate__backInUp text-white">
        <h2 className="lato-regular text-white" style={{ fontSize: "18px" }}>
          María Lujan Arias Osteópata <br />
        </h2>
      </div>
      <h4
        style={{ fontSize: "36px", fontWeight: "bold" }}
        className=" text-white text-center lato-regular py-2 animate__animated  animate__backInUp"
      >
        MI HISTORIA
      </h4>
      <div className="">
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
