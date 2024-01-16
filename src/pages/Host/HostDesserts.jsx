import React from 'react';
import { Link } from 'react-router-dom';

export default function HostDesserts() {
  const [lsDesserts, setLsDesserts] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/host/desserts')
      .then((res) => res.json())
      .then((data) => setLsDesserts(data.desserts));
  }, []);

  const listedDesserts = lsDesserts.map((ds) => {
    return (
      <Link
        to={`/host/desserts/${ds.id}`}
        key={ds.id}
        className="host--ds--box"
      >
        <div className="ls--ds--one">
          <img
            src={`../../public/assets/desserts/${ds.recog}.jpg`}
            alt={ds.name}
          />
          <div className="host--ds--info">
            <h3>{ds.name}</h3>
            <p>${ds.price}/per</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <section className="host--ds--total">
      <h1 className="host--ds--title">Your listed desserts</h1>
      <div className="host--ds--ls">
        {lsDesserts.length > 0 ? (
          <section>{listedDesserts}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
