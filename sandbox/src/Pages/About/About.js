import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import Card from "../../components/Card/Card";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 class="header">What we are doing there?</h1>
      <div class="row">
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
      <Footer />
    </div>
  );
};

export default About;
