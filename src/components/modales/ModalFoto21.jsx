import React from "react";
import { Button, Image } from "react-bootstrap";
import foto1 from "../../assets/img/slider21.png";

import ModalFoto21Contenido from "./ModalFoto21Contenido";

const ModalFoto21 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={foto1} alt="foto 1" fluid />
      </Button>

      <ModalFoto21Contenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalFoto21;
