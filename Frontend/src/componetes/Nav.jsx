import { useState } from 'react';
import { useUser } from '../usecontext/UserContext.jsx';
import { Link } from 'react-router-dom';
import { useProducts } from '../usecontext/ProductContext.jsx';
import Carrito from './Carrito.jsx';
import LoginForm from '../forms/LoginForm.jsx';
import RegisterForm from '../forms/RegisterForm.jsx';
import LogoutButton from '../componetes/Logout.jsx'; // Importamos el componente LogoutButton

const Nav = () => {
  const { pokemon, items } = useProducts();
  const { user } = useUser();

  const pokemonTypes = Array.from(new Set(pokemon.map(p => p.tipo).flat()));
  const itemTypes = Array.from(new Set(items.map(i => i.tipo).flat()));

  const [showPokemonTypes, setShowPokemonTypes] = useState(false);
  const [showItemTypes, setShowItemTypes] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li>
              <Link to="/pokemon">Pokemon</Link>
              <ul>
                <li onClick={() => setShowPokemonTypes(!showPokemonTypes)}>
                  <Link to='pokemon/tipo'>Tipos</Link>
                  {showPokemonTypes && (
                    <ul>
                      {pokemonTypes.map((tipo, index) => (
                        <li key={index}><Link to={`/pokemon/tipo/${tipo}`}>{tipo}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
                <li><Link to="/pokemon/legendarios">Legendarios</Link></li>
                <li><Link to="/pokemon/misticos">Místicos</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/items">Items</Link>
              <ul>
                <li onClick={() => setShowItemTypes(!showItemTypes)}>
                  <Link to='/items/tipo'>Tipos</Link>
                  {showItemTypes && (
                    <ul>
                      {itemTypes.map((tipo, index) => (
                        <li key={index}><Link to={`/items/tipo/${tipo}`}>{tipo}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </li>
            {user ? (
              <>
                <li>Welcome, {user.name}</li>
                <LogoutButton />
              </>
            ) : (
              <>
                <li><Link to="/login" >Login</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
        <Carrito />
      </header>
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </>
  )
}

export default Nav;
