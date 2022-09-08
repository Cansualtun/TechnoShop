import React, { useState, useEffect } from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Jumbotron = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    rating: "",
    stock: "",
    thumbnail: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  //This code block makes the product with id number 1 appear on the jumbotron.
  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:3001/products/${1}`);
    setProduct(res.data);
  };
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{product.title}</h1>
        <p className="lead">{product.description}</p>
        <div class="col-sm-12">
          <img
            src={product.thumbnail}
            class="card"
            alt="..."
            style={{ marginLeft: 370, borderRadius: 20 }}
          />
        </div>
        <p className="lead">
          <Link
            className="btn btn-warning btn-lg text-white "
            role="button"
            to={`/product/${1}`}
          >
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
