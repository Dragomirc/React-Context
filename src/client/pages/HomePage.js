import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Welcome!!!!</h3>
      <Link to="/dev">Test</Link>
      <p>Change your app here</p>
      <p>Check if context value is available {value}</p>
    </div>
  );
};

export default Home;
