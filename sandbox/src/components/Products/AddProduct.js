import { React, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import Products from "../../Pages/Products/Products";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const { title, description } = Products;
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/products", product);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add a Product</h2>
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
            <button className="btn btn-primary btn-block">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
