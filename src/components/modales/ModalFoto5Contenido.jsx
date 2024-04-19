import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto5 from "../../assets/img/5.jpg";

const ModalFoto5Contenido = (props) => {
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
          <Image src={foto5} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto5Contenido;
