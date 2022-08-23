import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./About.css";
import Card from "../../components/Card/Card";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 class="header">About-Us</h1>
      <div class="row">
        <Card name="passionate" text="djfhdsjkfh" />
        <Card name="successß" text="djfhdsjkfh" />
        <Card name="successß" text="djfhdsjkfh" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
