import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import logo from "../../public/pacto-logo.png";
import validate from "@/utils/validation/validationUser";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function changepassword() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useRouter();

  const [activeInput, setActiveInput] = useState("");

  //User State
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    code: "",
  });

  // Errors State
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    code: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validate({ [name]: value }),
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <div className={style.login}>
      <Head>
        <title>Mr. Nikki Shop | Cambio de contraseña</title>
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
          <h3>Cambiar tu contraseña</h3>
          <div className={style.sign}>
            <p>¿Ya tienes una cuenta?</p>
            <Link href="/login">
              <span>Inicia Sesión</span>
            </Link>
          </div>
        </div>

        <form className={style.form__Login} onSubmit={handleSubmit}>
          <label>* Código:</label>
          <input
            className={style.inputs}
            value={user.code}
            name={"code"}
            type="text"
            placeholder="Ingresa el código"
            onChange={(e) => handleChange(e)}
          />
          {activeInput === "code" && errors[activeInput] && (
            <p className={style.error}>{errors.code}</p>
          )}

          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            className={style.inputs}
            value={user.email}
            name={"email"}
            onChange={(e) => handleChange(e)}
          />
          {activeInput === "email" && errors[activeInput] && (
            <p className={style.error}>{errors.email}</p>
          )}

          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className={style.inputs}
            value={user.password}
            name={"password"}
            onChange={(e) => handleChange(e)}
          />
          {activeInput === "password" && errors[activeInput] && (
            <p className={style.error}>{errors.password}</p>
          )}

          <label>Confirma Contraseña:</label>
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            className={style.inputs}
            value={user.passwordConfirm}
            name={"passwordConfirm"}
            onChange={(e) => handleChange(e)}
          />
           {activeInput === "passwordConfirm" && errors[activeInput] && (
            <p className={style.error}>{errors.passwordConfirm}</p>
          )}
         

          <button type="submit">Cambiar contraseña</button>
        </form>
      </div>
    </div>
  );
}
