import styles from '../../styles/nosotros.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';
import Image from 'next/image';


export default function Nosotros() {
  return (
    <>
      <Layout title="Nosotros">
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.text}>
                    <div>
                        <h1>¿Quienes somos?</h1>
                        <p>Mr. Nikki Shop,   es   una   plataforma  de comercio electrónico donde   las Personas pueden comprar productos diseñados y confeccionados por Estampados Rionegro.
                        </p>
                    </div>
                    <div>
                        <h1>Nuestro misión</h1>
                        <p>Crea Tu Estilo Estampa Tu Idea.</p>
                    </div>
                </div>
                <Image className={styles.img} priority src="/pacto-logo.png" alt="logo" width="600" height="600"/>
            </div>
            <Link href={"/nosotros/terminos"}>
                <button className={styles.button}>Términos y condiciones</button>
            </Link>
        </div>
      </Layout>

    </>
  )
}