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
                        <p>Hand2Hand   Colombia,   en   adelante   H2H,   es   una   plataforma
                            de comercio electrónico donde las Personas Usuarias pueden
                            vender   y   comprar   productos   de   segunda   mano   usando
                            distintas   soluciones   de   pago   y   envío.   Nuestra   solución
                            tecnológica  está   diseñada   para   formar   un   ecosistema   que
                            permita   a   las   personas   vender,   comprar,   pagar,   enviar
                            productos   y   realizar   otras   actividades   comerciales   de
                            economía circular con tecnología aplicada.
                        </p>
                    </div>
                    <div>
                        <h1>Nuestra misión</h1>
                        <p>Democratizar el comercio y el acceso a recursos, e incentivar la economía circular en la región.</p>
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