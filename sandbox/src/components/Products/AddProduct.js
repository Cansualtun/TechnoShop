import { React, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import Products from "../../Pages/Products/Products";
import "./css/Add.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    thumbnail: "",
  });
  const { title, description, price, brand, thumbnail } = Products;
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  // The logic used to add the products added by the users next to the products we have.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/products", product);
  };
  //We enable the user to "add" it with the post process.
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add a Product</h2>
          <form onSubmit={(e) => onSubmit(e)} className="form">
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
                placeholder="Enter price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter brand"
                name="brand"
                value={brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Upload Image"
                name="thumbnail"
                value={thumbnail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn-warning btn-block" class="click">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
