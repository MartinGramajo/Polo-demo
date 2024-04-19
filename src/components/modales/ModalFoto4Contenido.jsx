import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import foto4 from "../../assets/img/4.jpg";

const ModalFoto4Contenido = (props) => {
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
          <Image src={foto4} alt="foto 4" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFoto4Contenido;
