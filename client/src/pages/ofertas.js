import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Ofertas() {
  return (
    <>
      <Layout title="Ofertas">
        <h1 className={styles.title}>Ofertas</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}