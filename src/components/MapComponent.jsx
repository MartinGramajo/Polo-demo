import React from "react";
import { Image } from "react-bootstrap";
import mapaMundi from "../assets/img/mapaMundi.png";

const MapComponent = () => {
  return (
    <div className="text-center">
      <h1 className="pb-4 " style={{ fontSize: "26px", fontWeight: "bold" }}>
        EXPANDIÉNDONOS POR EL MUNDO
      </h1>
      <div className="text-center ">
        <Image src={mapaMundi} fluid alt="mapa mundi" />
      </div>
    </div>
  );
};

export default MapComponent;
