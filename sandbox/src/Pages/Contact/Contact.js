import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast("Your Message Sent!");
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Contact-Us</h2>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name"
                name="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Surname"
                name="Surname"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Email"
                name="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Your message"
                name="Your Message"
                style={{ height: 200 }}
              />
            </div>
            <button
              className="btn btn-warning btn-block text-white"
              style={{ marginLeft: 380, marginTop: 10 }}
              onClick={notify}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
