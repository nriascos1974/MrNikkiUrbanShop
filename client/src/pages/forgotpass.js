import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import logo from "../../public/pacto-logo.png";


export default function forgotpass() {

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <div className={style.login}>
      <Head>
        <title>Mr. Nikki Shop | Recuperar Contraseña</title>
        <meta name="description" content="Mr. Nikki Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo} />
      </Head>

      <div className={style.containerLogin}>
        <div>
          <Link href="/">
            <Image
              className={style.logo}
              priority
              src={logo}
              alt="logo"
              width="140"
              height="140"
            />
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

        <form className={style.form__Login} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" className={style.inputs} placeholder="Email" />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
