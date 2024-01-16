import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img
        src="../public/assets/siteLogo.jpg"
        alt="site--logo"
        className="site--icon"
      />
      <Link to="/" className="site--name">
        #SWEETIE
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/desserts">Desserts</Link>
      </nav>
    </header>
  );
}
