import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import "./css/Add.css";
const Product = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    rating: "",
    stock: "",
    thumbnail: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(res.data);
  };
  return (
    <>
      <Navbar />
      <h1 className="header">{product.title}</h1>
      <div className="containerproduct col-xs-12 col-md-8">
        <ul className="list-group w-50 shadow p-5">
          <li className="list-group-item">Name: {product.title}</li>
          <li className="list-group-item">
            <img src={product.thumbnail} class="card-img" alt="..." />
          </li>
          <li className="list-group-item">Brand: {product.brand}</li>
          <li className="list-group-item">
            Description: {product.description}
          </li>
          <li className="list-group-item">Price: {product.price} $</li>
          <li className="list-group-item">Rating: {product.rating}</li>
          <li className="list-group-item">Stock: {product.stock}</li>
        </ul>
        <Link
          className="btn btn-warning text-white"
          style={{ marginLeft: 180, marginTop: 20 }}
          to="/Home"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Product;
