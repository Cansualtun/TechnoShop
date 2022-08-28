import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const Home = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProduct(result.data);
  };
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    loadProducts();
  };
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div class="row">
        {products.map((product, index) => (
          <div class="col-md-4">
            <div class="card_area">
              <div class="col-4">
                <div class="single_card">
                  <div class="card-img-top">
                    <div class="card" />
                    <img
                      src={product.thumbnail}
                      class="card-img-top"
                      alt="..."
                      style={{ marginLeft: 100 }}
                    />
                    <div class="card-body">
                      <h5 class="card-title col-10">{product.title}</h5>
                      <div class="list">
                        <ul>
                          <li class="card-brand col-4">{product.brand}</li>
                          <li class="card-price col-4">{product.price}$</li>
                        </ul>
                      </div>

                      <div class="row">
                        <div class="col-edit">
                          <Link
                            class="btn btn-warning"
                            to={`/product/edit/${product.id}`}
                          >
                            Edit
                          </Link>
                        </div>
                        <div class="col">
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                        <div class="col-detail">
                          <Link
                            to={`/product/${product.id}`}
                            class="btn btn-success"
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
