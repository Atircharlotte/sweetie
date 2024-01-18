import React from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

export default function HostDessertsDetail() {
  const [dsDetail, setDsDetail] = React.useState(null);
  const { id } = useParams(); //directly distruct the object

  //fetch corresponding data
  React.useEffect(() => {
    fetch(`/api/host/desserts/${id}`)
      .then((res) => res.json())
      .then((data) => setDsDetail(data.desserts));
  }, []);

  //if dsDetail is null, will render content below
  if (!dsDetail) {
    return <h2>Loading...</h2>;
  }
  //detail navbar active style
  const activeStyle = {
    fontWeight: 700,
    textDecoration: 'underline',
    color: 'black',
  };
  //normal situation render below
  return (
    <section className="host--ds--detail--section">
      {/*back to /host/desserts button */}
      <Link to=".." relative="path">
        &larr; <span>Back to all desserts</span>
      </Link>

      <div className="host--ds--detail--layout--container">
        <div className="host--van--detail">
          <img
            src={`../../public/assets/desserts/${dsDetail.recog}.jpg`}
            alt={dsDetail.name}
            width="100px"
            height="100px"
          />
          <div className="host--ds--detail--info--text">
            <i className={`dessert--type ${dsDetail.type}`}>{dsDetail.type}</i>
            <h3>{dsDetail.name}</h3>
          </div>
        </div>
        <nav className="host--ds--detail--nav">
          <NavLink
            end
            to="."
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
        </nav>
        <Outlet context={{ dsDetail }} />
      </div>
    </section>
  );
}
