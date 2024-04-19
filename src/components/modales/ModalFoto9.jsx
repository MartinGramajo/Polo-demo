import React from "react";
import { Button, Image } from "react-bootstrap";
import foto9 from "../../assets/img/9.jpg";
import ModalFoto9Contenido from "./ModalFoto9Contenido";

const ModalFoto9 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image className="imagen-filtros" src={foto9} alt="foto 9" fluid />
      </Button>

      <ModalFoto9Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto9;
