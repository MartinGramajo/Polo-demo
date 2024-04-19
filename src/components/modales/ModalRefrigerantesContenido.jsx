import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import refrigerantes from "../../assets/img/refrigerantes.png";

const ModalRefrigerantesContenido = (props) => {
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
          <Image src={refrigerantes} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalRefrigerantesContenido;
