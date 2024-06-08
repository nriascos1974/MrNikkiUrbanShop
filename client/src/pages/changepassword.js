import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import logo from "../../public/pacto-logo.png";
import validate from "@/utils/validation/validationUser";
import { recoveryPassword } from "@/redux/features/auth/authSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function changepassword() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useRouter();

  const handleInputFocus = (e) => {
    setActiveInput(e.target.name);
  };

  const [activeInput, setActiveInput] = useState("");

  //User State
  const [user, setUser] = useState({
    code: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // Errors State
  const [errors, setErrors] = useState({
    code: "",
    email: "",
    password: "",
    passwordConfirm: "",
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

  useEffect(() => {
    if (userState.verify) {
      navigate.push("/");
    }
  }, [userState.verify]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(recoveryPassword(user));
    setUser({
      code: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
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
            className={errors.code ? style.inputsError : style.inputs}
            value={user.code}
            name={"code"}
            type="text"
            placeholder="Ingresa el código"
            onChange={(e) => handleChange(e)}
            onFocus={handleInputFocus}
          />
          {activeInput === "code" && errors[activeInput] && (
            <p className={style.error}>{errors.code}</p>
          )}

          <label>* Email:</label>
          <input
            className={errors.email ? style.inputsError : style.inputs}
            value={user.email}
            name={"email"}
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            onFocus={handleInputFocus}
          />
          {activeInput === "email" && errors[activeInput] && (
            <p className={style.error}>{errors.email}</p>
          )}

          <label>* Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className={style.inputs}
            value={user.password}
            name={"password"}
            onChange={(e) => handleChange(e)}
            onFocus={handleInputFocus}
          />
          {activeInput === "password" && errors[activeInput] && (
            <p className={style.error}>{errors.password}</p>
          )}

          <label>* Confirma Contraseña:</label>
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            className={style.inputs}
            value={user.passwordConfirm}
            name={"passwordConfirm"}
            onChange={(e) => handleChange(e)}
            onFocus={handleInputFocus}
          />
          {user.passwordConfirm !== user.password ? (
            <p className={style.error}>"Las contraseñas no coinciden"</p>
          ) : (
            activeInput === "passwordConfirm" &&
            errors[activeInput] && (
              <p className={style.error}>{errors.passwordConfirm}</p>
            )
          )}
          {errors.email ||
          errors.code ||
          errors.email ||
          errors.passwordConfirm ||
          errors.password ||
          !user.password ||
          !user.passwordConfirm ||
          user.passwordConfirm !== user.password ? (
            <>
              <button className={style.disabled} disabled>
                Cambiar contraseña
              </button>
              <p className={style.error}>
                * Todos los datos deben estar completos y correctos para poder
                cambiar la contraseña
              </p>
            </>
          ) : (
            <button type="submit">Cambiar contraseña</button>
          )}
        </form>
      </div>
    </div>
  );
}
