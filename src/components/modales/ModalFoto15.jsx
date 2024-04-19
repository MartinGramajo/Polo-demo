import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider15.png";
import ModalFoto15Contenido from "./ModalFoto15Contenido";

const ModalFoto15 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto15Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto15;
