import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img
        src="../src/assets/siteLogo.jpg"
        alt="site--logo"
        className="site--icon"
      />
      <Link to="/" className="site--name">
        #SWEETIE
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? 'active--link' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active--link' : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/desserts"
          className={({ isActive }) => (isActive ? 'active--link' : null)}
        >
          Desserts
        </NavLink>
      </nav>
    </header>
  );
}
