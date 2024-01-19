import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Desserts() {
  const [desserts, setDesserts] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  //query params
  const typeFilter = searchParams.get('type');
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

  //filtering type
  const displayedDs = typeFilter
    ? desserts.filter((dessert) => dessert.type === typeFilter)
    : desserts;

  //render list
  const dessertElements = displayedDs.map((dessert) => (
    <div key={dessert.id} className="dessert--title">
      <Link
        to={`/desserts/${dessert.id}`}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
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

  //filter change function
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  return (
    <div>
      <h1 className="desserts--all">Explore our desserts</h1>
      <div className="ds--list--filter--button">
        <button
          onClick={() => {
            handleFilterChange('type', 'French');
          }}
          className={`dessert--type French ${
            typeFilter === 'French' ? 'selected' : ''
          }`}
        >
          French
        </button>
        <button
          onClick={() => {
            handleFilterChange('type', 'Italian');
          }}
          className={`dessert--type Italian ${
            typeFilter === 'Italian' ? 'selected' : ''
          }`}
        >
          Italian
        </button>
        <button
          onClick={() => {
            handleFilterChange('type', 'American');
          }}
          className={`dessert--type American ${
            typeFilter === 'American' ? 'selected' : ''
          }`}
        >
          American
        </button>
        {typeFilter ? (
          <button
            onClick={() => {
              handleFilterChange('type', null);
            }}
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="desserts--ls">{dessertElements}</div>
    </div>
  );
}
