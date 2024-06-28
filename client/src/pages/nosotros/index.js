import styles from '../../styles/nosotros.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/logo.png";


export default function Nosotros() {
  return (
    <>
      <Layout title="Nosotros">
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.text}>
                    <div>
                        <h1>¿Quienes somos?</h1>
                        <p>Mela BrandShop,   es   una   plataforma  de comercio electrónico donde   las Personas pueden comprar productos diseñados y confeccionados por Estampados Rionegro.
                        </p>
                    </div>
                    <div>
                        <h1>Nuestro misión</h1>
                        <p>Crea Tu Estilo Estampa Tu Idea.</p>
                    </div>
                </div>
                <Image className={styles.img} priority src={logo} alt="logo" width="600" height="600"/>
            </div>
            <Link href={"/nosotros/terminos"}>
                <button className={styles.button}>Términos y condiciones</button>
            </Link>
        </div>
      </Layout>

    </>
  )
}