import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/1.jpg";
import ModalFoto1Contenido from "./ModalFoto1Contenido";

const ModalFoto1 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto1Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto1;
