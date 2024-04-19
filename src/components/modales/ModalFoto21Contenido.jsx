import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto12 from "../../assets/img/slider21.png";

const ModalFoto21Contenido = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <Image src={foto12} alt="foto12" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto21Contenido;
