import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/not-found.svg";
import "./Error.css";
//The page that will be seen by the user when the user goes to a wrong path
const Error = () => {
  return (
    <div>
      <div className="error">
        <div>
          <img className="img-error" src={img} alt="not found" />
          <div className="text-error">
            <h3>Ohh! Page Not Found</h3>
            <p>We can't seem to find the page you're looking for </p>
            <Link to="/Home">Back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
