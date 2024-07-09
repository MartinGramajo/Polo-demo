import React from "react";
import { Accordion } from "react-bootstrap";

const PregFrecuentes = () => {
  return (
    <div className=" pb-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            ¿Cuáles son las principales servicios que ofrece Polo Salud?
          </Accordion.Header>
          <Accordion.Body>
            Polo Salud ofrece diferentes servcios que hacen al cuidado del
            caballo deportivo de Polo: Terapia manual, Osteopatía, Kinesiotape,
            monitoreo con cámara termografica profesional FLIR y análisis
            biomecánico de los jugadores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            ¿Quien se puede beneficiar de los servicios de Polo Salud ?
          </Accordion.Header>
          <Accordion.Body>Los caballos de polo y sus jugadores</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            ¿Ofrecen planes para organizaciones de polo ?
          </Accordion.Header>
          <Accordion.Body>
            Sí, existen diferente planes que varían de acuerdo al momento de la
            temporada de polo en los diferentes países de contratación
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            ¿Si mi país no figura en la lista de los paises propuestos, me puedo
            beneficiar de los servicios/planes de Polo Salud?
          </Accordion.Header>
          <Accordion.Body>
            Sí. Polo Salud adecuará la localización según la demanda.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            ¿Cuál es el costo y duración del tratamiento?
          </Accordion.Header>
          <Accordion.Body>
            los costos y duración varian según la necesidad de cada
            organización. Luego de la videollamada para entender las necesidades
            de cada organización se determinará un presupuesto y duración del
            plan personalizado.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {" "}
            ¿Polo Salud atiende caballos de otras disciplinas ecuestres, no solo
            de Polo?
          </Accordion.Header>
          <Accordion.Body>
            Sí, Polo Salud brinda sus servicios diferentes disciplinas
            ecuestres: Salto, Doma, Enduro, Carreras...sobre todo en islas
            Baleares que es donde reside María Luján
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PregFrecuentes;
