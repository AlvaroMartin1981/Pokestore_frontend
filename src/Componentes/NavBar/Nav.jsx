import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProducts } from '../../usecontext/ProductContext.jsx';
import { useUser } from '../../usecontext/UserContext.jsx';
import Cart from '../Cart/Cart.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import LoginForm from '../Forms/LoginForm.jsx';
import Logout from '../Logout.jsx';
import './Navbar.css';

const Nav = () => {
  const { pokemon, items } = useProducts();
  const { user } = useUser();
  const location = useLocation(); 
  const [showForm, setShowForm] = useState(false);
  const [navVisible, setNavVisible] = useState(true); 
  const [showPokemonTypes, setShowPokemonTypes] = useState(false);
  const [showItemTypes, setShowItemTypes] = useState(false);

  useEffect(() => {
    setShowPokemonTypes(false);
    setShowItemTypes(false);
  }, [location.pathname]);

  const pokemonTypes = Array.from(new Set(pokemon.map(p => p.tipo).flat()));
  const itemTypes = Array.from(new Set(items.map(i => i.tipo).flat()));

  const getUsernameFromEmail = (email) => {
    return email.split('@')[0];
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <>
    {console.log(location.pathname)}
     <div className="menu-icon" onClick={toggleNav}>
        <div className={navVisible ? 'menu-line' : 'menu-line close'}></div>
        <div className={navVisible ? 'menu-line' : 'menu-line close'}></div>
        <div className={navVisible ? 'menu-line' : 'menu-line close'}></div>
      </div>
      {navVisible && (
        <nav>
          <ul>
            <li onMouseEnter={() => setShowPokemonTypes(true)} onMouseLeave={() => setShowPokemonTypes(false)}>
              <Link to="/pokemon">Pokemon</Link>
              <ul className='tipos'>
                <li><Link to='pokemon/tipo'>Tipos</Link></li>
                <li><Link to="/pokemon/legendarios">Legendarios</Link></li>
                <li><Link to="/pokemon/misticos">Místicos</Link></li>
                {pokemonTypes.map((tipo, index) => (
                  <li key={index}><Link to={`/pokemon/tipo/${tipo}`}>{tipo}</Link></li>
                ))}
              </ul>
            </li>
            <li onMouseEnter={() => setShowItemTypes(true)} onMouseLeave={() => setShowItemTypes(false)}>
              <Link to="/items">Items</Link>
              <ul className='tipos'>
                {itemTypes.map((tipo, index) => (
                  <li key={index}><Link to={`/items/tipo/${tipo}`}>{tipo}</Link></li>
                ))}
              </ul>
            </li>
          </ul>
          <SearchBar />
          <div className='nav_info_person'>
            <Cart />
            {user ? (
              <>
                <li>Welcome, {getUsernameFromEmail(user.email)}</li>
                <Logout />
              </>
            ) : (
              <> <div onMouseEnter={toggleForm} className="login-form-container" >
              <button >Login</button>
              {showForm && (
                 <LoginForm />
                )}

              </div>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
