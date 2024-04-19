import BannerProductos from "../components/BannerProductos";
import Brands from "../components/Brands";

import ProductoContenido from "../components/ProductoContenido";

const Productos = () => {
  return (
    <div>
      <BannerProductos />
      <ProductoContenido />
      <Brands title="También trabajamos con todas estas marcas" />
    </div>
  );
};

export default Productos;
