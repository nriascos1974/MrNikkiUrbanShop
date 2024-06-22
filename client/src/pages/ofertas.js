import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import EnConstruccion from '@/components/enConstruccion';
import ProductListPpal from '@/components/ProductListPpal';

export default function Ofertas() {
  return (
    <>
      <Layout title="Ofertas">
        <h1 className={styles.title}>Productos</h1>
        <ProductListPpal />
      </Layout>

    </>
  )
}