import React from "react";
import { Image } from "react-bootstrap";
import bannerNovedades from "../assets/img/bannerNovedades.jpg";

const TextBlock = ({ content, colorTheme }) => (
  <div className="textBlock">
    <h1 className="my-2" style={{ fontSize: "26px" }}>
      {content.heading}
    </h1>
    <h2 style={{ color: colorTheme }}>{content.subheading}</h2>
    <div className="paragraphContainer">
      <p>{content.content}</p>
    </div>
    <div className="text-center">
      <a
        style={{ fontSize: "16px" }}
        className=""
        href={content.enlace}
        target="_blank"
        rel="noopener noreferrer"
      >
        ver mas
      </a>
    </div>
  </div>
);

const Category = ({ category, colorTheme }) => (
  <div className="category">
    <span style={{ backgroundColor: colorTheme }}>
      <strong>{category}</strong>
    </span>
  </div>
);

const Comments = ({ numComments }) => (
  <div className="numComments">
    <span>{numComments} comments</span>
  </div>
);

const Thumbnail = ({ src }) => (
  <div className="thumbnailContainer">
    <div className="thumbnail" style={{ backgroundImage: `url(${src})` }}></div>
  </div>
);

const Card = ({ data }) => {
  const { thumbnail, colorTheme, category, text, enlace } = data;

  return (
    <div className="cardContainer">
      <Thumbnail src={thumbnail} />
      <Category category={category} colorTheme={colorTheme} />
      <TextBlock enlace={enlace} content={text} colorTheme={colorTheme} />
    </div>
  );
};

const cardData = [
  {
    id: 1,
    thumbnail:
      "https://revistamundoequino.com/wp-content/uploads/2019/09/Caballo-polo-Santa-Maria-Polo-Club-Low72-760x490.jpg",
    colorTheme: "orange",
    category: "DISCIPLINAS ECUESTRES",
    comments: 9,
    text: {
      heading: "Selección y compra de caballos de Polo",
      subheading: "",
      content: `Es importante para el comprador tener un profesional de referencia para tal efecto, que sepa fundamentalmente interpretar qué categoría de caballo necesita para el nivel de juego del futuro comprador. Esto es importante ya que determinadas taras o patologías son aceptables en algunos casos, y por tal motivo no sería bueno rechazar un caballo que tal vez le pueda enseñar algo a su jinete.`,
      enlace:
        "https://revistamundoequino.com/2019/09/23/seleccion-y-compra-de-caballos-de-polo/",
    },
  },
  {
    id: 2,
    thumbnail:
      "https://revistamundoequino.com/wp-content/uploads/2019/04/45835854965_4c6f76f22d_o-II-760x490.jpg",
    colorTheme: "blue",
    category: "DISCIPLINAS ECUESTRES",
    comments: 24,
    text: {
      heading: "¿Cómo deben viajar los caballos para estar tranquilos?",
      subheading: "",
      content: `Un estudio de Barbara Padalino, investigadora de la Universidad Alma Matet Studiorum y Sharanne Raidal de la Facultad de Cienecias Animales y Veterinarias de la Universidad de Charles Sturt reveló la forma correcta de viajar con caballos.`,
      enlace:
        "https://revistamundoequino.com/2020/05/06/como-deben-viajar-los-caballos-para-estar-tranquilos/",
    },
  },

  {
    id: 3,
    thumbnail:
      "https://i0.wp.com/blog.terranea.es/wp-content/uploads/2020/08/031-3.jpg?w=640&ssl=1",
    colorTheme: "green",
    category: "DISCIPLINAS ECUESTRES",
    comments: 24,
    text: {
      heading: "LA CRÍA DE LOS CABALLOS DE POLO: TRADICIÓN Y ESFUERZO",
      subheading: "",
      content: `Las características del caballo de polo son fruto de la mezcla de caballos “criollos” que se encargaban de las labores del campo y Pura Sangres ingleses para aportarles velocidad y resistencia. Esta mezcla ha generado animales fuertes y compactos con una agilidad, destreza y velocidad necesarias para el desarrollo de este deporte. `,
      enlace: "https://blog.terranea.es/caballos-de-polo-2/",
    },
  },
  {
    id: 4,
    thumbnail:
      "https://revistamundoequino.com/wp-content/uploads/2020/05/101010101010111000010101010100101011111-760x490.jpg",
    colorTheme: "red",
    category: "DISCIPLINAS ECUESTRES",
    comments: 24,
    text: {
      heading: "Entrenamiento positivo para caballos",
      subheading: "",
      content: `En qué momento los métodos en entrenamiento cruzan la delgada línea entre lo que está y no permitido? En esta nota te contaremos algunas historias poco exitosas durante el entrenamiento equino y cómo ayudar a tu caballo para que aprenda mediante refuerzos positivos y negativos`,
      enlace:
        "https://revistamundoequino.com/2020/05/13/entrenamiento-positivo-para-caballos/",
    },
  },
  {
    id: 5,
    thumbnail:
      "https://www.horsepilot.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F183484%2F1280x929%2Fbc8cce2f38%2Fpolo-sport-equitation.jpg&w=1920&q=75",
    colorTheme: "green",
    category: "DISCIPLINAS ECUESTRES",
    comments: 24,
    text: {
      heading: "¿ QUÉ ES EL POLO ?",
      subheading: "",
      content: `El polo se percibe a menudo como el deporte de los reyes. En realidad, es un deporte ecuestre de equipo dinámico y apasionante. Es accesible a cualquiera que esté dispuesto a invertir en aprender sus reglas y técnicas. Con una rica historia que abarca continentes y épocas, el polo combina habilidad ecuestre, estrategia de equipo y velocidad. Cada partido es una experiencia espectacular tanto para los jugadores como para los espectadores.`,
      enlace: "https://www.horsepilot.com/es-es/horse-riding/polo",
    },
  },
  {
    id: 6,
    thumbnail:
      "https://www.argentinapoloday.com.ar/blog/wp-content/uploads/2017/03/IMG_4209.jpg",
    colorTheme: "orange",
    category: "DISCIPLINAS ECUESTRES",
    comments: 24,
    text: {
      heading: "CUIDADO DEL CABALLO DE POLO",
      subheading: "",
      content: `Lo primero que hay que tener en cuenta cuando uno tiene un caballo, es que es un ser vivo. No por obvia es innecesaria esta aclaración, a los caballos hay que cuidarlos todo el tiempo, todos los días. A partir del momento en que los sacamos de su hábitat natural, nosotros pasamos a ser responsables absolutos de la vida de ellos, es por eso que les damos algunas recomendaciones sobre el cuidado del caballo de polo.`,
      enlace:
        "https://argentinapoloday.com.ar/blog/cuidado-del-caballo-de-polo/",
    },
  },
];

const ContenidoNovedades = () => {
  return (
    <div>
      <article>
        <div className="text-center">
          <Image
            className="py-4"
            src={bannerNovedades}
            fluid
            alt="novedades banner"
          />
        </div>
        <article>
          <div className=" py-4" style={{ textAlign: "start" }}>
            <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
              {" "}
              Últimas Innovaciones en el Cuidado del Caballo de Polo
            </h1>
          </div>

          <div className=" mb-5" style={{ textAlign: "start" }}>
            <h5 style={{ fontSize: "18px" }}>
              {" "}
              Bienvenido a nuestra sección de novedades, el espacio dedicado a
              mantenerte al día con los avances más recientes y emocionantes en
              el bienestar y rendimiento de los caballos de polo. Aquí
              compartiremos contigo las últimas investigaciones, técnicas
              revolucionarias, y prácticas basadas en la ciencia que están
              transformando el cuidado equino en Argentina y más allá. Desde
              estudios de caso hasta lanzamientos de nuevos servicios, pasando
              por seminarios web educativos y colaboraciones exclusivas, esta es
              tu fuente de información privilegiada sobre cómo la pasión y la
              innovación se unen para elevar el estándar de excelencia en el
              deporte del polo. Mantente conectado y sé el primero en conocer
              cómo estamos cambiando el juego en el cuidado de los caballos de
              polo.
            </h5>
          </div>
        </article>
        <article>
          {cardData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </article>
        {/* <article className="mb-5">
          <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
            ¿Cómo se desarrolla una sesión de Osteopatía equina?
          </h2>
          <h5 style={{ fontSize: "18px" }}>
            En una primera medida se evalúa y observa al caballo estático y
            luego en movimiento, analizando la calidad de cada uno de sus aires.{" "}
            <br /> Luego se procede a la palpación superficial, media y profunda
            donde se analizan la textura y movilidad de las diferentes
            estructuras anatómicas: músculos, tendones , ligamentos juego
            articular de la columna vertebral y los miembros, movilidad y
            motilidad visceral , y el funcionamiento e interacción del sistema
            nervioso . Según el diagnóstico osteopático y quiropráctico se
            procederá a las manipulaciones y ajustes de la zona a tratar. <br />{" "}
            Las sesiones generalmente duran una hora y se realizan in situ.
          </h5>
        </article> */}
      </article>
      {/* <article className="mb-5">
        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
          ¿Qué caballos pueden beneficiarse de este tipo de tratamiento?{" "}
        </h2>
        <h5 style={{ fontSize: "18px" }}>
          Es aplicado sobre todo en caballos deportistas (salto, carreras, doma
          clásica, endurance, etc.) donde su exigencia es la de un deportista de
          alto rendimiento, así como también caballos de centros de
          equinoterapia, cabalgatas y uso doméstico.{" "}
        </h5>
      </article> */}
      {/* <article className="my-4">
        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
          ¿Cómo me doy cuenta si mi caballo se puede beneficiar de la
          terapéutica?{" "}
        </h2>
        <h5 className="mt-4" style={{ fontSize: "18px", textAlign: "start" }}>
          ● Cómo jinete, si sientes y notas que tu caballo: <br />
          ● Trabaja diferente de un lado u otro <br />
          ● Patea cuando te acercas <br />
          ● Se molesta al ensillarlo, <br />
          ● En la zona de la chincha tiene pelos blancos a nivel de la Cruz o
          zona donde va la montura <br />
          ● Atrofia muscular <br />
          ● Bajo rendimiento deportivo <br />
          ● Mal o diferente comportamiento pérdida de peso <br />
          ● Dificultad para colocarle la cabezada, cabecea al andar <br />
          ● Kissing spine <br />
          ● Lesiones a repetición en tendones y ligamentos <br />● Principios de
          cólicos a repetición
        </h5>
      </article> */}
    </div>
  );
};

export default ContenidoNovedades;
