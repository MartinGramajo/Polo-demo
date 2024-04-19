import React from "react";
import { Button, Image } from "react-bootstrap";
import foto3 from "../../assets/img/3.jpg";
import ModalFoto3Contenido from "./ModalFoto3Contenido";

const ModalFoto3 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto3} alt="Foto 3 " fluid />
      </Button>

      <ModalFoto3Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto3;
