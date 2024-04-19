import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider16.png";
import ModalFoto16Contenido from "./ModalFoto16Contenido";

const ModalFoto16 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto16Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto16;
