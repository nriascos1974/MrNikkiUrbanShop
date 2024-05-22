import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import style from "../styles/Login.module.css"


export default function forgotpass(){

    return (
        <div className= {style.login}>
            <Head>
                <title>PACTO | Recuperar Contraseña</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>

            <div className= {style.containerLogin}>
                <div>
                    <Link href="/">
                        <Image className= {style.logo} priority src="/pacto-logo.png" alt="logo" width="140" height="140"/>
                    </Link>
                    <h3>Recuperar contraseña</h3>
                    <p>Recibirás enlace de confirmación para el respectivo cambio</p>
                    <div className={style.sign}>
                        <p>¿Ya tienes una cuenta?</p>
                        <Link href="/login">
                            <span>Inicia Sesión</span>
                        </Link>
                    </div>
                </div>

                
                    <form className={style.form__Login}>
                        <label>Email:</label>
                        <input type="email" placeholder="Email" />

                        <button>Enviar</button>
                    </form>
                
            </div>

        </div>
    )
}