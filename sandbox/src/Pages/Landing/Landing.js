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
              <h1 style={{ marginLeft: 100 }}>
                TechnoShop <span className="text-warning">App Page</span>
              </h1>
              <p className="lead my-4" class="text">
                Thanks to this sandbox application, you can add, revise and
                delete your products if you don't want them. In the coming days,
                you can become a member and enjoy the benefits of membership!
              </p>
              <Link to="/Home">
                <button
                  className="btn btn-warning btn-lg text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#start"
                  style={{ marginLeft: 10 }}
                >
                  Start
                </button>
              </Link>
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
