import "animate.css";
import ImageTextComponent3 from "../components/ImageTextComponent3";
import ImageTextMobileComponent3 from "../components/ImageTextMobileComponent3";

const CamaraTermografica = () => {
  return (
    <div>
      <div
        className="d-none d-lg-block animate__animated   animate__fadeIn"
        id="trabajamos"
      >
        <ImageTextComponent3 />
      </div>

      <div>
        <div
          id="trabajamos/mobile"
          className="d-lg-none d-block  animate__animated  animate__fadeIn"
        >
          <ImageTextMobileComponent3 />
        </div>
      </div>
    </div>
  );
};

export default CamaraTermografica;
