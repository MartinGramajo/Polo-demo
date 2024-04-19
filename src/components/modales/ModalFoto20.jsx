import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider20.png";
import ModalFoto20Contenido from "./ModalFoto20Contenido";

const ModalFoto20 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto20Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto20;
