import BioComponent from "../components/BioComponent";
import BioComponentMobile from "../components/BioComponentMobile";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/common/Footer";
import ImageTextComponent from "../components/ImageTextComponent";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextComponent3 from "../components/ImageTextComponent3";
import ImageTextMobileComponent from "../components/ImageTextMobileComponent";
import ImageTextMobileComponent3 from "../components/ImageTextMobileComponent3";
import ImageTextMobileComponent2 from "../components/ImageTextMobileComponente2";
import MobileCarouselComponent from "../components/MobileCarouselComponent";
import "animate.css";
const Home = () => {
  return (
    <div>
      <div className="d-none d-lg-block" style={{ backgroundColor: "#191919" }}>
        <CarouselComponent />
      </div>

      <div className="d-lg-none d-block" style={{ backgroundColor: "#191919" }}>
        <MobileCarouselComponent />
      </div>
      <div className="d-none d-lg-block ">
        <BioComponent />
      </div>
      <div className="d-lg-none d-block">
        <BioComponentMobile />
      </div>
      <div
        className="d-none d-lg-block  text-white"
        style={{ backgroundColor: "#191919" }}
      >
        <div id="servicios" className="animate__animated   animate__fadeIn">
          <ImageTextComponent />
        </div>
      </div>

      <div
        className="d-none d-lg-block  text-white animate__animated   animate__fadeIn"
        style={{ backgroundColor: "#595C5F" }}
        id="trabajamos"
      >
        <ImageTextComponent2 />
      </div>

      <div
        className="d-none d-lg-block  text-white animate__animated   animate__fadeIn"
        style={{ backgroundColor: "#191919" }}
        id="termografia"
      >
        <ImageTextComponent3 />
      </div>

      <div>
        <div
          className="d-lg-none d-block  text-white animate__animated   animate__fadeIn"
          style={{ backgroundColor: "#191919" }}
          id="servicios/mobile"
        >
          <ImageTextMobileComponent />
        </div>

        <div
          id="trabajamos/mobile"
          className="d-lg-none d-block  text-white animate__animated   animate__fadeIn"
          style={{ backgroundColor: "#595C5F" }}
        >
          <ImageTextMobileComponent2 />
        </div>

        <div
          id="termografia/mobile"
          className="d-lg-none d-block  text-white animate__animated   animate__fadeIn"
          style={{ backgroundColor: "#191919" }}
        >
          <ImageTextMobileComponent3 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
