import { Link } from "react-router-dom";
import { InputField } from "../../components/general";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {

  const { user, password, onInputChange } = useForm({
    user: '',
    password: ''
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-xs px-6 py-6 rounded-md shadow-md">
        <h2 className="font-bold text-2xl mb-5">Iniciar sesión</h2>
        <p>Bienvenido a peluApp, para acceder al sistema utiliza las credenciales creadas anteriormente.</p>

        <form className="mb-5"  autoComplete="off">
          <InputField 
            label="Usuario"
            inputName="user"
            type="text"
            value={user}
            onChange={onInputChange}
          />

          <InputField 
            label="Contraseña"
            inputName="password"
            type="password"
            value={password}
            onChange={onInputChange}
          />

          <button type="submit" className="bg-primary py-3 px-4 rounded-md">Iniciar sesión</button>
        </form>

        <h4 className="font-bold mb-2">¿Aún no posees una cuenta?</h4>
        <p className="mb-5">Si deseas registrarte en nuestra aplicación haz clic en el siguiente enlace.</p>
        <Link to="/auth/register" className="color-primary font-bold">Crear nueva cuenta</Link>
      </div>
    </div>
  );
};
