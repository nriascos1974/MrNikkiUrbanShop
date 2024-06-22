import styles from "@/styles/Productos.module.css";
import Layout from "@/components/layout";
import SortComponent from "@/components/sortComponent";
import Paginado from "@/components/paginado";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductList from "@/components/ProductList";

export default function Productos() {
  // LÓGICA DEL COMPONENTE
  const { cantidad } = useSelector((state) => state.products.productList);

  // Estado local para manejar la visibilidad del panel de filtros en mobile
  const [showFilters, setShowFilters] = useState(false);

  // RENDERIZADO DEL COMPONENTE
  return (
    <>
      <Layout title="Productos">
        <div className={styles.container}>
          {/* Sección para el contenido ppal de la página */}
          <div className={styles.main}>
            {/* Contenedor de la info de los productos */}
            <div className={styles.productsContainer}>
              {/* Header del contenedor de la  info de los productos */}
              <div className={styles.prodContainerHeader}>
                <p className={styles.label}>Productos: {cantidad}</p>
                <SortComponent />
              </div>
              <div>
                <ProductList />
              </div>
              <div className={styles.prodContainerFooter}>
                <Paginado />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
