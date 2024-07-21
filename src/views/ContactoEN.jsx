import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider10.png";
import bannerServiciosCuadrada from "../assets/img/slider10.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import ContactoContenidoEN from "../components/ContactoContenidoEN";

const ContactoEN = () => {
  const [language, setLanguage] = useState("en"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_ZcSsAXNNVg10BaEZ9WfreNzaFGIXNVC0Zaz7dxcgM0IoirzTIein6LC2wx6t0FC7c9WDg3_u_Lwu/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslations(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <div>
      <>
        <div className="bannerContainer d-none d-md-block">
          <Image
            src={bannerServicios}
            className="bannerImage"
            alt="inicio banner"
          />
        </div>
        <div className=" d-md-none d-block">
          <Image
            src={bannerServiciosCuadrada}
            className="bannerImage"
            alt="inicio banner"
          />
        </div>
      </>
      <ContactoContenidoEN />
    </div>
  );
};

export default ContactoEN;
