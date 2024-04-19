import { Image } from "react-bootstrap";
import fotoPerfil from "../assets/img/12.jpg";

const EmpresaContenido = () => {
  return (
    <section className="container ">
      <div className="row">
        <div className="col-md-12 col-lg-4 my-5">
          <article className="text-center">
            <Image
              className="py-4 "
              src={fotoPerfil}
              roundedCircle
              alt="inicio banner"
            />
          </article>
          <h6
            className="text-black"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            María Lujan Arias <br /> Osteópata D.O.{" "}
          </h6>
          <h6 className="text-black" style={{ fontSize: "16px" }}>
            Miembro del registro de osteópatas de España MROE 783
          </h6>
          <h6 className="text-black  py-4" style={{ fontSize: "16px" }}>
            En osteopatía equina, trato sobretodo caballos de Polo y Salto. Me
            focalizo en que puedan: mantener su salud ante la demanda física
            propia de la disciplina extender su vida deportiva, disminuyendo el
            porcentaje de lesiones a repetición mantener la flexibilidad de su
            columna vertebral y su musculatura Acompañamiento in situ en las
            competiciones deportivas
          </h6>
        </div>
        <div className="col-md-12 col-lg-8 mt-5">
          {" "}
          <h6>
            Osteopatía equina en : Mallorca, Ibiza, Menorca, Barcelona, Madrid
            Inglaterra, Bélgica, Argentina, Uruguay.
          </h6>
          <h6>
            En osteopatía equina, trato sobretodo caballos de Polo y Salto. Me
            focalizo en que puedan: mantener su salud ante la demanda física
            propia de la disciplina extender su vida deportiva, disminuyendo el
            porcentaje de lesiones a repetición mantener la flexibilidad de su
            columna vertebral y su musculatura Acompañamiento in situ en las
            competiciones deportivas
          </h6>
          <h6 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Formación académica:
          </h6>
          <h6>
            Osteópata D.O., graduada de la E.A.O, miembro de la O.I.A
            -Osteopathic International Alliance-. Obtuvo su Diplomatura en
            Osteopatía -D.O.- ante Jurado Internacional. <br />
            Master en osteopatía animal, ESO/AOI. <br />
            ———- <br />
            Post grado de osteopatía en Francia -Ginecología I y II- . COB Post
            grado de osteopatía en Francia- Sistema endócrino y sistema
            nervioso-. COB. <br /> ———- <br />
            Formación Equiterapeutas – Anahi Zlotnik – Argentina. <br />
            Osteopatía equina – Paolo Tozzi- Italia. <br /> Master Osteopatía
            animal -equinos- AOI/ESO- Inglaterra. <br /> Auxiliar veterinario,
            especialista en Rehabilitación y fisioterapia equina, España. <br />{" "}
            Post grado de Quiropráctica animal en equinos, AIQA. <br />
            Post grado en cadenas miofasciales en equinos. UK.
          </h6>
          <h6 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Docencia y experiencia internacional:
          </h6>
          <h6>
            Traductora y asistente en seminarios en distintos países de Europa
            de la reconocida osteópata canadiense Nathalie Camirand D.O.
            <br />
            ———- <br />
            Docente de ginecología en la E.A.O.
            <br /> ———- <br />
            Traductora del fránces al español de los seminarios de post grado de
            Nathalie Camirand y Thierry Leboustier. <br /> ———- <br />
            Traductora del francés al español del libro Osteopatía aplicada a la
            ginecología de C. Agerón Marque.
            <br /> ———- <br />
            Docente de fascias en equinos en la formación de Equiterapuetas de
            la veterinaria Anahi Zlotnik.
            <br /> ———- <br />
            Co-directora de la clínica EL CLARO, en Punta del este, Uruguay,
            donde además impartió los últimos años, antes de mudarse a España,
            las consultas de osteopatía. www.elclaro.com.uy
          </h6>
        </div>
      </div>
    </section>
  );
};

export default EmpresaContenido;
