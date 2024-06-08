import { useDispatch, useSelector } from "react-redux";

const validate = (dataEdit) => {
  const [name, value] = Object.entries(dataEdit)[0];

  let errors = {};

  if (name === "email") {
    if (!value) {
      errors[name] = "El email no puede estar vacío";
    }
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)) {
      errors[name] = "El email introducido es inválido";
    }
  }
  if (name === "firstname") {
    if (!/^[a-zA-Z]{1,15}$/.test(value)) {
      errors[name] = "El nombre introducido es inválido";
    }
  }
  if (name === "lastname") {
    if (!/^[a-zA-Z ]{1,40}$/.test(value)) {
      errors[name] = "El apellido introducido es inválido";
    }
  }
  if (name === "address") {
    if (!value) {
      errors[name] = "La dirección no puede estar vacía";
    }
    if (value.length > 70) {
      errors[name] = "La dirección no puede superar los 60 caracteres";
    }
  }
  if (name === "code") {
    if (!value) {
      errors[name] = "El código no puede estar vacío";
    }
  }
  if (name === "phone") {
    if (!value) {
      errors[name] = "El número de teléfono no puede estar vacío";
    }
    if (!/^\d{1,10}$/.test(value)) {
      errors[name] = "El número de teléfono introducido es inválido";
    }
  }
  if (name === "password") {
    if (!value) {
      errors[name] = "La contraseña no puede estar vacío";
    }
    if (value.length < 8 || value.length > 20) {
      errors[name] = "La contraseña debe tener entre 8 y 20 caracteres";
    }
    if (!/\d/.test(value)) {
      errors[name] = "La contraseña debe contener al menos un número";
    }
  }
  if (name === "passwordConfirm") {
    if (!value) {
      errors[name] = "La contraseña no puede estar vacío";
    }
    if (value.length < 8 || value.length > 20) {
      errors[name] = "La contraseña debe tener entre 8 y 20 caracteres";
    }
    if (!/\d/.test(value)) {
      errors[name] = "La contraseña debe contener al menos un número";
    }
  }
  return errors[name];
};

export default validate;
