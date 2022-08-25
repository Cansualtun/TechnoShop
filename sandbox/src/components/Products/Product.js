import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
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
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <ul className="list-group w-50">
        <li className="list-group-item">name: {product.title}</li>
        <li className="list-group-item">description: {product.description}</li>
      </ul>
    </div>
  );
};

export default Product;
