import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto2 from "../../assets/img/2.jpg";

const ModalFoto2Contenido = (props) => {
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
          <Image className="foto-width" src={foto2} alt="foto 2" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto2Contenido;
