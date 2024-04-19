import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider19.png";
import ModalFoto19Contenido from "./ModalFoto19Contenido";

const ModalFoto19 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto19Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto19;
