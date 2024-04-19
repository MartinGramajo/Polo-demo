import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider14.png";
import ModalFoto14Contenido from "./ModalFoto14Contenido";

const ModalFoto14 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto14Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto14;
