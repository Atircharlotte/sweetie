import React from 'react';
import { Link } from 'react-router-dom';

export default function Desserts() {
  const [desserts, setDesserts] = React.useState([]);
  //send get request
  React.useEffect(() => {
    fetch('/api/desserts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDesserts(data.desserts))
      .catch((error) => console.error('Fetch error:', error));
  }, []);
  const dessertElements = desserts.map((dessert) => (
    <div key={dessert.id} className="dessert--title">
      <Link to={`/desserts/${dessert.id}`}>
        <img
          src={dessert.imageUrl}
          alt={dessert.name}
          width="200px"
          height="200px"
        />
        <div className="dessert--info">
          <h2>{dessert.name}</h2>
          <p className="dessert--price">
            ${dessert.price}
            <span>/per</span>
          </p>
        </div>
        <i className={`dessert--type ${dessert.type} selected`}>
          {dessert.type}
        </i>
      </Link>
    </div>
  ));
  return (
    <div>
      <h1 className="desserts--all">Explore our desserts</h1>
      <div className="desserts--ls">{dessertElements}</div>
    </div>
  );
}
