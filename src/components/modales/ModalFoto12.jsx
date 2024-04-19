import React from "react";
import { Button, Image } from "react-bootstrap";

import foto12 from "../../assets/img/12.jpg";
import ModalFoto12Contenido from "./ModalFoto12Contenido";

const ModalFoto12 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image className="imagen-filtros" src={foto12} alt="foto 12" fluid />
      </Button>

      <ModalFoto12Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto12;
