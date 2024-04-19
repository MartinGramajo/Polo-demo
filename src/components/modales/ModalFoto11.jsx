import React from "react";
import { Button, Image } from "react-bootstrap";
import foto11 from "../../assets/img/11.jpg";
import ModalFoto11Contenido from "./ModalFoto11Contenido";

const ModalFoto11 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image className="imagen-filtros" src={foto11} alt="foto 11" fluid />
      </Button>

      <ModalFoto11Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto11;
