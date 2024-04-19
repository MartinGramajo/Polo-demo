import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto3 from "../../assets/img/3.jpg";

const ModalFoto3Contenido = (props) => {
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
          <Image src={foto3} alt="foto 3" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto3Contenido;
