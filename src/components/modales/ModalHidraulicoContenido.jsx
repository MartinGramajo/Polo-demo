import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import filtrohidraulico from "../../assets/img/filtrohidraulico.jpg";

const ModalHidraulicoContenido = (props) => {
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
          <Image src={filtrohidraulico} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalHidraulicoContenido;
