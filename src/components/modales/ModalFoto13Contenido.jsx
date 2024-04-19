import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto13 from "../../assets/img/slider13.png";

const ModalFoto13Contenido = (props) => {
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
          <Image src={foto13} alt="foto12" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto13Contenido;
