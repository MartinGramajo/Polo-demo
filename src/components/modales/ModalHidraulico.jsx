import React from "react";
import { Button, Image } from "react-bootstrap";
import filtrohidraulico from "../../assets/img/filtrohidraulico.jpg";
import ModalHidraulicoContenido from "./ModalHidraulicoContenido";

const ModalHidraulico = () => {
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
          src={filtrohidraulico}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalHidraulicoContenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalHidraulico;
