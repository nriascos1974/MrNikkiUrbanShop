import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/router";
import { registerUser, verifyCode } from "@/redux/features/auth/authSlice";
import { sendCode } from "@/redux/features/auth/authSlice";
import { getDepartments, getCities } from "@/redux/features/departments/departmentsSlice";
import validate from "@/utils/validation/validationUser";
import { MdDepartureBoard, MdElectricalServices } from "react-icons/md";

export default function login() {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user)
  const navigate = useRouter();

  useEffect(() => {
    if (userState.verify){
      navigate.push('/');
    }
    if(typeof window !== 'undefined' && localStorage.getItem("user_unverified")){

      dispatch(sendCode())
    }
    
  }, [userState.verify])

  //User State
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname:"",
    lastname:"",
    address:"",
    phone:"",
    code: "",
    department:"",
    city:""
  });

  // Errors State
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstname:"",
    lastname:"",
    address:"",
    phone:"",
    department:"",
    city:""
  })

  const [activeInput, setActiveInput] = useState('');

  const handleInputFocus = (e) => {
      setActiveInput(e.target.name)
  };

  //terminos acept
  const [terminos, setTerminos] = useState(false);

  const handleTerminos = (e) => {
    const { checked } =  e.target
    setTerminos(checked)
  };


  //Code State
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validate({ [name]: value })
    });
  };

  /*----------------------------------Departamento y ciudades-----------------------------------------*/
      useEffect(() => {
        dispatch(getDepartments())
    }, [])

    const { departments, cities } = useSelector(state => state.locations)

    const handleDepaSelect = (e) => {
      const { id , value } = e.target;

      // Busco el id del departamento seleccionado para buscar sus ciudades
      const { _id } = departments.find(depa => depa.department === value);
      dispatch(getCities(_id));

      setUser({
        ...user,
        [id]: value
      })
    }

    const handleCitySelect = (e) => {
      const { id , value } = e.target;

      setUser({
        ...user,
        [id]: value
      })
    }

    // useEffect(() => {
    //   console.log(user)
    // }, [user])

    /*---------------------------------------------------------------------------------------------------*/

  const handleSubmit = (event) => {
      event.preventDefault();

      dispatch(registerUser(user));
  };

  const handleSubmitCode = (event) => {
    event.preventDefault();
    dispatch(verifyCode({email:user.email,code:user.code, token:localStorage.getItem("user_unverified")}));
  };





  return (
    <div>
      <Head>
        <title>H2H | Registro</title>
        <meta name="description" content="H2H" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pacto-logo.png" />
      </Head>
  
      <div className={style.login}>
        {userState.sendCode ? (
          <div className={style.containerLogin}>
            <form className={style.form__Login} onSubmit={handleSubmit}>
              <label>Código:</label>
              <input
                className={style.inputs}
                value={user.code}
                name={"code"}
                type="text"
                placeholder="Ingresa el código"
                onChange={(e) => handleChange(e)}
              />
  
              <button type="submit" onClick={handleSubmitCode}>Enviar</button>
            </form>
          </div>
        ) : (
          <div className={style.containerLogin}>
            <div>
              <Link href="/">
                <Image
                  className={style.logo}
                  priority
                  src="/pacto-logo.png"
                  alt="logo"
                  width="140"
                  height="140"
                />
              </Link>
              <h3>Crea tu cuenta</h3>
              <div className={style.sign}>
                <p>¿Ya tienes una cuenta?</p>
                <Link href="/login">
                  <span>Inicia Sesión</span>
                </Link>
              </div>
            </div>
  
            <form className={style.form__Login} onSubmit={handleSubmit} >
              <label>Email:</label>
              <input className={errors.email ? style.inputsError : style.inputs} value={user.email} name={"email"} type="email" placeholder="Email" onChange={(e) => handleChange(e)} onFocus={handleInputFocus} />
              { activeInput === 'email' && errors[activeInput] && <p className={style.error}>{errors.email}</p> }

              <label>Nombre:</label>
              <input className={errors.firstname ? style.inputsError : style.inputs} value={user.firstname} name={"firstname"} type="text" placeholder="Nombre" onChange={(e) => handleChange(e)} onFocus={handleInputFocus} />
              { activeInput === 'firstname' && errors[activeInput] && <p className={style.error}>{errors.firstname}</p> }

              <label>Apellido:</label>
              <input className={errors.lastname ? style.inputsError : style.inputs} value={user.lastname} name={"lastname"} type="text" placeholder="Apellido" onChange={(e) => handleChange(e)} onFocus={handleInputFocus} />
              { activeInput === 'lastname' && errors[activeInput] && <p className={style.error}>{errors.lastname}</p> }

              <label>Departamento:</label>
                <select className={!user.department ? style.selectsError : style.selects} name="department" id="department" onChange={handleDepaSelect} defaultValue="default">
                  <option disabled value="default">Selecciona un departamento</option>
                  {departments &&
                    departments.map((depa) => (
                      <option key={depa._id} value={depa.department} data-categoria="departamento">
                        {depa.department}
                      </option>
                    ))}
                </select>

              <label>Ciudad:</label>
              <select className={!user.city ? style.selectsError : style.selects} name="city" id="city" onChange={handleCitySelect} defaultValue="default">
                  <option disabled value="default">Selecciona una ciudad</option>
                  {
                    cities && cities.map(obj => (
                      <option key={obj._id} value={obj._id} data-categoria="ciudad">{obj.city}</option>
                    ))
                  }
              </select>
            
              <label>Dirección:</label>
              <input className={errors.address ? style.inputsError : style.inputs} value={user.address} name={"address"} type="text" placeholder="Dirección" onChange={(e) => handleChange(e)} onFocus={handleInputFocus} />
              { activeInput === 'address' && errors[activeInput] && <p className={style.error}>{errors.address}</p> }

  
              <label>Teléfono:</label>
              <input className={errors.phone ? style.inputsError : style.inputs} value={user.phone} name={"phone"} type="number" placeholder="Ingresa tu teléfono" onChange={(e) => handleChange(e)} onFocus={handleInputFocus} />
              { activeInput === 'phone' && errors[activeInput] && <p className={style.error}>{errors.phone}</p> }


              <label>Contraseña:</label>
              <input className={errors.password ? style.inputsError : style.inputs} value={user.password} name={"password"} type="password" placeholder="Ingresa tu contraseña" onChange={(e) => handleChange(e)} onFocus={handleInputFocus}/>
              { activeInput === 'password' && errors[activeInput] && <p className={style.error}>{errors.password}</p> }

              <div className={style.terminos}>
                <input type="checkbox"  value={terminos} onClick={handleTerminos} /><div>Aceptar <Link href='/nosotros/terminos'>Términos y condiciones</Link></div>
              </div>
              
              
              {
                errors.email || errors.firstname || errors.lastname || errors.address || errors.phone || errors.password || 
                !user.department || !user.city || !user.email || !user.firstname || !user.lastname || !user.address || !user.phone || !user.password || !terminos
                ?
                <>
                  <button className={style.disabled} disabled >Registrate</button>
                  <p className={style.error}>Todos los datos deben estar completos y correctos para poder registrarse</p>
                </>
                :
                <button  type="submit">Registrate</button>
              }
              
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
