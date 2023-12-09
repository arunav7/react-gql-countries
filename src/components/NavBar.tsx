import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <div className='navbar'>
    <NavLink
      to='/'
      className={({ isActive }) => (isActive ? 'active' : 'link')}
    >
      Continents
    </NavLink>
    <NavLink
      to='/all-countries'
      className={({ isActive }) => (isActive ? 'active' : 'link')}
    >
      Countries
    </NavLink>
    <NavLink
      to='/all-languages'
      className={({ isActive }) => (isActive ? 'active' : 'link')}
    >
      Language
    </NavLink>
  </div>
);
