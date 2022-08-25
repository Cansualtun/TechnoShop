import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import Product from "./components/Products/Product";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
