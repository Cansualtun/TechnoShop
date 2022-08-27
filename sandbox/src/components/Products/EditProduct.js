import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Products from "../../Pages/Products/Products";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
  });
  const { title, description, brand, price } = Products;
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadProduct();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/products/${id}`, product);
  };
  const loadProduct = async () => {
    const result = await axios.get(
      `http://localhost:3001/products/${id}`,
      product
    );
    setProduct(result.data);
  };
  const notify = () => toast("Product Edited!");
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter product name"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Brand"
                name="brand"
                value={brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              className="btn btn-warning btn-block text-white"
              style={{ marginLeft: 350, marginTop: 10 }}
              onClick={notify}
            >
              Edit Product
            </button>
            <ToastContainer position="top-center" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProduct;
