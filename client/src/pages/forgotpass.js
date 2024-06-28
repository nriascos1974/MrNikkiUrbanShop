import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import logo from "../../public/logo.png";
import { codeUserMail } from "@/redux/features/auth/authSlice";
import validate from "@/utils/validation/validationUser";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function forgotpass() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useRouter();

  useEffect(() => {
    if (userState.recoveryMail) {
      navigate.push("/changepassword");
    }
  }, [userState.recoveryMail]);

  const [user, setUser] = useState({
    email: "",
  });

  // Errors State
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleInputFocus = (e) => {
    setActiveInput(e.target.name);
  };

  const [activeInput, setActiveInput] = useState("");

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
    dispatch(codeUserMail(user));

    setUser({
      ...user,
      ["email"]: "",
    });
  };

  return (
    <div className={style.login}>
      <Head>
        <title>Mela BrandShop | Recuperar Contraseña</title>
        <meta name="description" content="Mela BrandShop" />
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
        
          {/* <p>Recibirás enlace de confirmación para el respectivo cambio</p> */}
          <div className={style.sign}>
            <Link href="/login">
              <span>Inicia Sesión</span>
            </Link>
          </div>
          <div className={style.sign}>
            <Link href="/changepassword">
              <span>Cambiar Contraseña</span>
            </Link>
          </div>
        </div>

        <form className={style.form__Login} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            className={errors.email ? style.inputsError : style.inputs}
            value={user.email}
            name={"email"}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            onFocus={handleInputFocus}
          />
          {activeInput === "email" && errors[activeInput] && (
            <p className={style.error}>{errors.email}</p>
          )}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
