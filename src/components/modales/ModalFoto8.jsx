import React from "react";
import { Button, Image } from "react-bootstrap";
import foto8 from "../../assets/img/8.jpg";
import ModalFoto8Contenido from "./ModalFoto8Contenido";

const ModalFoto8 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto8} alt="foto 8" fluid />
      </Button>

      <ModalFoto8Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto8;
