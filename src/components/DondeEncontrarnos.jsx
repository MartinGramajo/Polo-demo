const DondeEncontrarnos = () => {
  return (
    <div className="mb-5 ">
      <div className="text-center text-black">
        <h3
          className="text-center text-dark py-5"
          style={{ fontSize: "26px", fontWeight: "bold" }}
        >
          {" "}
          ¿DÓNDE NOS PODES ENCONTRAR?{" "}
        </h3>
      </div>
      <div className="text-center container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.065516233744!2d2.5643966764987476!3d39.53557600879686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12978e9b7f1cf427%3A0x617f4b5cca9568d3!2sCarrer%20Miguel%20de%20Cervantes%2C%2023%2C%2007181%20Portals%20Nous%2C%20Illes%20Balears%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1709497773942!5m2!1ses-419!2sar"
          width="100%"
          height="650"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          title="mapa"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
