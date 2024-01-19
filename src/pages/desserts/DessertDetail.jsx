import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

export default function Dessertdetail() {
  const [dessert, setDessert] = React.useState(null);
  const id = useParams().id; //get id num
  const location = useLocation(); //get the URL object
  console.log(location);

  React.useEffect(() => {
    fetch(`/api/desserts/${id}`)
      .then((res) => res.json())
      .then((data) => setDessert(data.desserts));
  }, [id]);

  const search = (location.state && location.state.search) || '';
  const type = (location.state && location.state.type) || 'all';

  return (
    <div className="dessert--detail--box">
      {dessert ? (
        <div className="dessert--detail">
          <Link to={`..?${search}`} relative="path">
            &larr; <span>Back to {type} desserts</span>
          </Link>
          <img
            src={`../public/assets/desserts/${dessert.recog}.jpg`}
            alt={dessert.name}
          />
          <i className={`dessert--type ${dessert.type} selected`}>
            {dessert.type}
          </i>
          <h2>{dessert.name}</h2>
          <p className="dessert--price">
            <span>${dessert.price}</span>
          </p>
          <p>{dessert.description}</p>
          <button className="desserts--button">Buy this dessert</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
