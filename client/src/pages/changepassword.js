import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import style from "../styles/Login.module.css"
import logo from "../../public/pacto-logo.png";


export default function changepassword(){

    return (
        <div className= {style.login}>
            <Head>
                <title>Mr. Nikki Shop | Cambio de contraseña</title>
                <meta name="description" content="Mr. Nikki Shop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={logo} />
            </Head>

            <div className= {style.containerLogin}>
                <div>
                    <Link href="/">
                        <Image className= {style.logo} priority src={logo} alt="logo" width="140" height="140"/>
                    </Link>
                    <h3>Cambiar tu contraseña</h3>
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

                        <label>Contraseña:</label>
                        <input type="password" placeholder="Ingresa tu contraseña" />

                        <label>Contraseña:</label>
                        <input type="password" placeholder="Repite tu contraseña" />

                        <button>Cambiar contraseña</button>
                    </form>
                
            </div>

        </div>
    )
}