import React from "react";
import { Button, Image } from "react-bootstrap";
import isf3 from "../../assets/img/isf3.8.png";
import ModalIsf3Contenido from "./ModalFoto5Contenido";
import foto5 from "../../assets/img/5.jpg";
import ModalFoto5Contenido from "./ModalFoto5Contenido";

const ModalFoto5 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto5} alt="foto 5" fluid />
      </Button>

      <ModalFoto5Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto5;
