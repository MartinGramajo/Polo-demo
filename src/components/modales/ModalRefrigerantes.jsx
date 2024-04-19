import React from "react";
import { Button, Image } from "react-bootstrap";
import refrigerantes from "../../assets/img/refrigerantes.png";
import ModalRefrigerantesContenido from "./ModalRefrigerantesContenido";

const ModalRefrigerantes = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image
          className="imagen-filtros"
          src={refrigerantes}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalRefrigerantesContenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalRefrigerantes;
