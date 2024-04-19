import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto from "../../assets/img/1.jpg";

const ModalFoto1Contenido = (props) => {
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
          <Image className="foto-width" src={foto} alt="Foto 1" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto1Contenido;
