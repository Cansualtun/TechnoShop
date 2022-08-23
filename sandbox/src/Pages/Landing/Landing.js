import React from "react";
import "./Landing.css";
import img from "../../assets/img/hero.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="text-dark text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between w-full h-full">
            <div>
              <h1>
                Sandbox <span className="text-warning">App Page</span>
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, laudantium. Quasi quaerat temporibus quod impedit ab.
                Omnis perspiciatis architecto dolores.
              </p>
              <a href="/Home">
                <button
                  className="btn btn-warning btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#start"
                >
                  Start Building
                </button>
              </a>
            </div>
            <img
              src={img}
              className="img-fluid w-50 h-50 d-none d-sm-block"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
