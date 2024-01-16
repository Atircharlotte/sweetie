import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Desserts from './components/Desserts';
import '../server.js'; //import the server!!!!
import Dessertdetail from './components/DessertDetail.jsx';

function App() {
  return (
    <BrowserRouter>
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
          <Link to="/about">About</Link>
          <Link to="/desserts">Desserts</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/desserts/:id" element={<Dessertdetail />} />
      </Routes>
      <footer className="footer">
        <small>@SWEETIE all rights reserved</small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
