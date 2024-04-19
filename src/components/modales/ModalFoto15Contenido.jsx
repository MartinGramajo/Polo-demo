import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto15 from "../../assets/img/slider15.png";

const ModalFoto15Contenido = (props) => {
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
          <Image src={foto15} alt="foto12" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto15Contenido;
