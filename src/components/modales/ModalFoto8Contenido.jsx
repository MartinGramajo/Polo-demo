import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto8 from "../../assets/img/8.jpg";

const ModalFoto8Contenido = (props) => {
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
          <Image src={foto8} alt="foto 8 " fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto8Contenido;
