import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto9 from "../../assets/img/9.jpg";

const ModalFoto9Contenido = (props) => {
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
          <Image src={foto9} alt="foto 9" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto9Contenido;
