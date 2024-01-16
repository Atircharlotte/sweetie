import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about">
      <img src="../public/assets/happiness.jpg" alt="cake is happiness" />
      <div className="about--content">
        <h1>
          "Happiness is a piece of cake."
          <br />
          SWETTIE provides one-of-a-kind flavor especially for you.
        </h1>
        <p>
          Our goal is to make sure our customers taste the best quality of
          desserts.
        </p>
        <p>
          Give us a chance to take you to venture in the world of delicious
          desserts!
        </p>
      </div>
      <div className="about--bio">
        <h2>
          Our cakes are all ready!
          <br />
          Pick one right away!
        </h2>
        <Link to="/desserts" className="desserts--button">
          Explore our desserts
        </Link>
      </div>
    </div>
  );
}
