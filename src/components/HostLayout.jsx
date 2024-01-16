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
        to="/host"
        end
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Host
      </NavLink>
      <NavLink
        to="/host/income"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="/host/reviews"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Reviews
      </NavLink>
      <Outlet />
    </nav>
  );
}
