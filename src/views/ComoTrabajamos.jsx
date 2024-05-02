import "animate.css";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextMobileComponent2 from "../components/ImageTextMobileComponente2";

const ComoTrabajamos = () => {
  return (
    <div>
      <div
        className="d-none d-lg-block animate__animated   animate__fadeIn"
        id="trabajamos"
      >
        <ImageTextComponent2 />
      </div>

      <div>
        <div
          id="trabajamos/mobile"
          className="d-lg-none d-block  animate__animated  animate__fadeIn"
        >
          <ImageTextMobileComponent2 />
        </div>
      </div>
    </div>
  );
};

export default ComoTrabajamos;
