import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto14 from "../../assets/img/slider14.png";

const ModalFoto14Contenido = (props) => {
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
          <Image src={foto14} alt="foto12" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto14Contenido;
