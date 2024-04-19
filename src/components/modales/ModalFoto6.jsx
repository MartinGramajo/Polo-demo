import React from "react";
import { Button, Image } from "react-bootstrap";
import foto6 from "../../assets/img/6.jpg";
import ModalFoto6Contenido from "./ModalFoto6Contenido";

const ModalFoto6 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto6} alt="Foto 6" fluid />
      </Button>

      <ModalFoto6Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto6;
