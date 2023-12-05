import React from "react";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>This is the contact page</h1>
    </div>
  );
}

const CostcoxShopContainer = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default CostcoxShopContainer;
