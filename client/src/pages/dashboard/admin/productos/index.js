import Layout from '@/components/dashboard/admin/Layout.js';
import ProductsList from "@/components/dashboard/admin/ProductsList";

function Productos() {
  return (
    <>
      <Layout title="Productos">
        <ProductsList />
      </Layout>
    </>
  )
};

export default Productos;