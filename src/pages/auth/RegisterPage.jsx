import { Link } from "react-router-dom";
import { InputField } from "../../components/general";
import { useForm } from "../../hooks";

export const RegisterPage = () => {
  const { name, last_name, email, password, type_user, onInputChange } =
    useForm({
      name: "",
      last_name: "",
      email: "",
      password: "",
      type_user: "",
    });

  return (
    <div className="w-full h-full flex flex-col justify-center px-10">
      <div className="py-6 mb-5">
        <img src="/logo.svg" alt="styled spapp" className="w-52" />
      </div>

      <h2 className="font-bold text-2xl mb-5">Iniciar sesión</h2>
      <p>
        Bienvenido a styled spapp, para acceder al sistema utiliza las
        credenciales creadas anteriormente.
      </p>

      <form className="mb-5" autoComplete="off">
        <InputField
          label="Nombres"
          inputName="name"
          type="text"
          value={name}
          onChange={onInputChange}
        />

        <InputField
          label="Apellidos"
          inputName="last_name"
          type="text"
          value={last_name}
          onChange={onInputChange}
        />

        <InputField
          label="Correo electrónico"
          inputName="email"
          type="email"
          value={email}
          onChange={onInputChange}
        />

        <InputField
          label="Contraseña"
          inputName="password"
          type="password"
          value={password}
          onChange={onInputChange}
        />

        <div className="my-5 w-full">
          <p className="mb-2 font-bold">¿Qué tipo de usuario eres?</p>
          <label htmlFor="type_user_admin" className="mr-5">
            <input
              type="radio"
              name="type_user"
              id="type_user_admin"
              value={type_user}
              onChange={onInputChange}
              className="mr-2"
            />
            Administrador
          </label>
          <label htmlFor="type_user_client">
            <input
              type="radio"
              name="type_user"
              id="type_user_client"
              value={type_user}
              onChange={onInputChange}
              className="mr-2"
            />
            Cliente
          </label>
        </div>

        <button type="submit" className="bg-primary py-3 px-4 rounded-md">
          Registrarse
        </button>
      </form>

      <h4 className="font-bold mb-2">¿Ya tienes una cuenta?</h4>
      <p className="mb-5">
        Si ya tienes una cuenta, haz clic en el siguiente enlace para iniciar sesión
      </p>
      <Link to="/auth" className="color-primary font-bold">
        Ir a inicio de sesión
      </Link>
    </div>
  );
};
