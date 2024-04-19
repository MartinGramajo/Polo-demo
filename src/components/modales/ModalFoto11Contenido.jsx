import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import foto11 from "../../assets/img/11.jpg";

const ModalFoto11Contenido = (props) => {
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
          <Image src={foto11} alt="foto 11" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto11Contenido;
