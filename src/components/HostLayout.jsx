import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: 'black',
};
export default function HostLayout() {
  return (
    <nav className="host--nav">
      <NavLink
        to="." // this means "/host"
        end
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Host
      </NavLink>
      <NavLink
        to="income" //equals "/host/income"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="desserts" //equals "/host/desserts"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Desserts
      </NavLink>
      <NavLink
        to="reviews" //equals "host/reviews"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Reviews
      </NavLink>
      <Outlet />
    </nav>
  );
}
