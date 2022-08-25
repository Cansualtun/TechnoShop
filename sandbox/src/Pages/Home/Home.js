import React from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
  };

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div class="row">
        {products.map((product, index) => (
          <div class="col-4">
            <div class="card" />
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}</p>
              <div>
                <Link to="/" class="btn btn-warning">
                  Detail
                </Link>
                <Link to="/" className="btn btn-danger" class="btn btn-danger">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
