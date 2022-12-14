import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import Card from "../../components/Card/Card";
import aboutpng from "../../assets/img/about.jpeg";

const About = () => {
  return (
    <>
      <div class="row">
        <Navbar />
        <h1 class="header">What are we doing here?</h1>
        <div>
          <Card
            name="Technology Side"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  "
          />
          <Card
            name="Self-Care Side"
            text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
          />
          <Card
            name="Gift Side"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
          />
        </div>
        <img
          src={aboutpng}
          className="img-fluid w-50 h-50 d-none d-sm-block"
          alt="hero-image"
          class="png"
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
