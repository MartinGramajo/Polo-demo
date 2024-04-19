import ModalAire from "./modales/ModalAire";
import ModalAceite from "./modales/ModalAceite";
import ModalCarter from "./modales/ModalCarter";
import ModalComb from "./modales/ModalComb";
import ModalHidraulico from "./modales/ModalHidraulico";
import ModalRefrigerantes from "./modales/ModalRefrigerantes";

const Filtracion = () => {
  return (
    <section className="text-dark">
      <div className="container py-5">
        <h1 className="text-center text-dark pt-5">
          {" "}
          FILTRACIÓN Y REFRIGERACIÓN
        </h1>
        <h5 className="text-center text-dark pt'2">
          {" "}
          Motores limpios, máximo rendimiento
        </h5>
        <h6 className="text-center text-dark ">
          {" "}
          Los productos de filtración y escape de Cummins mantienen los motores
          comerciales funcionando a su máxima capacidad, con filtros,
          refrigerantes y aditivos de combustible que aumentan el tiempo de
          funcionamiento, reducen los costos y tienen poco impacto ambiental.{" "}
          <br />
          Los equipos de investigación e ingeniería de Cummins están
          constantemente desarrollando, refinando y mejorando nuestros sistemas
          de aire, enfriamiento, combustible, hidráulico, lubricantes y
          transmisión, junto con nuestros otros productos de filtración, en todo
          el mundo.
        </h6>

        <h5 className="text-center my-5">
          <b>Fleetguard</b> es el nombre de marca de todas la gama de productos
          de Cummins para solventar los problemas de filtración de aire, la
          limpieza de motores y plantas eléctricas, y otros componentes químicos
          como refrigerante de maquinarias.
        </h5>
        <div className="row text-dark text-center my-5">
          <div className="col-12 col-md-4 col-lg-4">
            <div>
              <ModalAire />
              <div className="my-4">
                <h5> Filtro de aire </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 ">
            <div>
              <ModalAceite />
              <div className="my-4">
                <h5> Filtro de aceite</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div>
              <ModalCarter />
              <div className="my-4">
                <h5> Filtro de Carter</h5>
              </div>
            </div>
          </div>

          {/* Motores part 2  */}
          <div className="row text-dark text-center my-5">
            <div className="col-12 col-md-4 col-lg-4">
              <div>
                <ModalComb />
                <div className="my-4">
                  <h5> Filtro comb</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 ">
              <div>
                <ModalHidraulico />
                <div className="my-4">
                  <h5> Filtro Hidráulico</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div>
                <ModalRefrigerantes />
                <div className="my-4">
                  <h5> Refrigerantes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtracion;
