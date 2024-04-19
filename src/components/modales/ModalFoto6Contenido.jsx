import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto6 from "../../assets/img/6.jpg";

const ModalFoto6Contenido = (props) => {
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
          <Image src={foto6} alt="foto 6" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto6Contenido;
