import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dessertdetail() {
  const [dessert, setDessert] = React.useState(null);
  const id = useParams().id; //get id num

  React.useEffect(() => {
    fetch(`/api/desserts/${id}`)
      .then((res) => res.json())
      .then((data) => setDessert(data.desserts));
  }, [id]);
  return (
    <div className="dessert--detail--box">
      {dessert ? (
        <div className="dessert--detail">
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
