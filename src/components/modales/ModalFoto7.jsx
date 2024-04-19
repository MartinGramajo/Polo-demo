import React from "react";
import { Button, Image } from "react-bootstrap";
import foto7 from "../../assets/img/7.jpg";
import ModalFoto7Contenido from "./ModalFoto7Contenido";

const ModalFoto7 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={foto7} alt="foto 7" fluid />
      </Button>

      <ModalFoto7Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto7;
