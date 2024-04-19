import React from "react";
import { Button, Image } from "react-bootstrap";
import foto10 from "../../assets/img/10.jpg";
import ModalFoto10Contenido from "./ModalFoto10Contenido";

const ModalFoto10 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image className="imagen-filtros" src={foto10} alt="foto 10" fluid />
      </Button>

      <ModalFoto10Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto10;
