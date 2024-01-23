import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound--box">
      <h1>Sorry, the page you were looking for is not found.</h1>
      <Link to="/">Return to home</Link>
      <img alt="notfound" src="../assets/error.jpg" width="100%" />
    </div>
  );
}
