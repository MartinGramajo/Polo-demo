import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider24.png";
import ModalFoto24Contenido from "./ModalFoto24Contenido";

const ModalFoto24 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto24Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto24;
