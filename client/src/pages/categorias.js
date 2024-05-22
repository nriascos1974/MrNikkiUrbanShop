import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Categorias() {
  return (
    <>
      <Layout title="Categorías">
        <h1 className={styles.title}>Categorías</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}