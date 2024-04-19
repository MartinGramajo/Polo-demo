import React from "react";
import { Button, Image } from "react-bootstrap";
import ModalIsf2Contenido from "./ModalFoto4Contenido";
import foto4 from "../../assets/img/4.jpg";
import ModalFoto4Contenido from "./ModalFoto4Contenido";

const ModalFoto4 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto4} alt="foto 4" fluid />
      </Button>

      <ModalFoto4Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto4;
