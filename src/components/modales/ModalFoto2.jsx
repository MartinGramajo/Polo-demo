import React from "react";
import { Button, Image } from "react-bootstrap";
import foto2 from "../../assets/img/2.jpg";
import ModalFoto2Contenido from "./ModalFoto2Contenido";

const ModalFoto2 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto2} alt="foto 2" fluid />
      </Button>

      <ModalFoto2Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto2;
