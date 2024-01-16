import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="home">
      <h1>
        Wanna get some desserts?
        <br />
        We got a lot!
      </h1>
      <h4>Try out desserts made from fresh materials and love!</h4>
      <h4>Find your favorite desserts in SWEETIE.</h4>
      <Link to="/desserts" className="desserts--button">
        Find your dessert
      </Link>
    </div>
  );
}
