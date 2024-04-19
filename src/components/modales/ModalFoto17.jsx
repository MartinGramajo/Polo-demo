import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider17.png";
import ModalFoto13Contenido from "./ModalFoto13Contenido";
import ModalFoto17Contenido from "./ModalFoto17Contenido";

const ModalFoto17 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto17Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto17;
