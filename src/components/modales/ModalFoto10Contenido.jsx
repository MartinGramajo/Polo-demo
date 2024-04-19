import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto10 from "../../assets/img/10.jpg";

const ModalFoto10Contenido = (props) => {
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
          <Image src={foto10} alt="foto 10" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto10Contenido;
