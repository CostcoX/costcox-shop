import React from "react";
import "./app.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CostcoxShopContainer from "./components/CostcoxShopContainer/CostcoxShopContainer";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <CostcoxShopContainer />
      <FooterComponent />
    </>
  );
};

export default App;
