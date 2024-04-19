import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto7 from "../../assets/img/7.jpg";

const ModalFoto7Contenido = (props) => {
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
          <Image src={foto7} alt="foto 7" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto7Contenido;
