import { Link } from "react-router-dom";
import { InputField } from "../../components/general";
import { useForm } from "../../hooks";

export const RegisterPage = () => {

  const { name, last_name, email, password, type_user, onInputChange } = useForm({
    name: '',
    last_name: '',
    email: '',
    password: '',
    type_user: ''
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-xs px-6 py-6 rounded-md shadow-md">
        <h2 className="font-bold text-2xl mb-5">Registrarse</h2>
        <p>Completa el siguiente formulario para poder registrarte en el sistema.</p>

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

          <button type="submit" className="bg-primary py-3 px-4 rounded-md">Registrarse</button>
        </form>

        <h4 className="font-bold mb-2">¿Ya posees una cuenta?</h4>
        <p className="mb-5">Si deseas iniciar sesión, haz clic en el siguiente enlace.</p>
        <Link to="/auth/login" className="color-primary font-bold">Iniciar sesión</Link>
      </div>
    </div>
  );

}
