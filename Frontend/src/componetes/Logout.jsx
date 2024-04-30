/*import { useHistory } from 'react-router-dom';
import { useUser } from '../usecontext/UserContext.jsx';

const Logout = () => {
  const { setUser } = useUser();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      // Realizar el proceso de logout, por ejemplo, limpiar el estado de usuario y redirigir al usuario a la página de inicio
      setUser(null); // Limpiar el estado del usuario en el contexto
      history.push('/home'); // Redirigir al usuario a la página de inicio
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Manejar el error de logout si es necesario
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;*/
