import React from "react";
import { Routes, Route } from "react-router-dom";
import CostcoXShopComponent from "../CostcoXShopComponent/CostcoXShopComponent";
import ShoppingCartPage from "../ShoppingCart/ShoppingCartPage";
import { ShoppingCartWrapper } from "../ShoppingCart/ShoppingCartWrapper";
import Account from "../Account/Account";

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
    <div className="">
      <Routes>
        <Route exact path="/" element={<CostcoXShopComponent />} />
        <Route exact path="/cart" element={<ShoppingCartWrapper/>} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default CostcoxShopContainer;
