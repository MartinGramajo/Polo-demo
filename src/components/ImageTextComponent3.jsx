import React from "react";
import backgroundImage from "../assets/img/lesioncuello.jpg";

const ImageTextComponent3 = () => {
  return (
    <div className="d-flex align-items-center">
      {/* Imagen cuadrada a la izquierda */}
      <div style={{ width: "50%", marginRight: "20px" }}>
        <img
          src={backgroundImage}
          alt="Imagen"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Texto a la derecha */}
      <div className="container" style={{ width: "50%" }}>
        <h3 className="montserrat-bold" style={{ fontSize: "32px" }}>
          CONOCÉ EL USO DE LA TERMOOGRAFÍA EN LOS EQUINOS
        </h3>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          La termografía es un método confiable para detectar y medir
          variaciones de temperatura o reduccion de la misma en regiones
          anatómicas del cuerpo. Estas variaciones se registran en imágenes
          digitales llamadas termogramas. Estos termogramas nos permiten
          analizar los datos que contienen identificando, mediendo y
          monitoreando patrones térmicos y posibles sitios de lesiones o
          enfermedades. El entrenamiento intensivo de los caballos se asocia con
          importantes exigencias físicas sobre el sistema musculoesquelético, lo
          que contribuye a una alta incidencia de lesiones. La lesión provoca
          cambios en la circulación sanguínea y, por tanto, cambios en la
          temperatura de la superficie corporal. La termografía puede detectar
          estos cambios en la temperatura de la superficie corporal y, por lo
          tanto, puede usarse para diagnosticar y monitorear lesiones,
          enfermedades y sobrecarga de trabajo del sistema musculoesquelético.
        </p>
      </div>
    </div>
  );
};

export default ImageTextComponent3;
