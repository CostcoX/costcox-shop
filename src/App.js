import React from "react";
import "./app.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CostcoxShopContainer from "./components/CostcoxShopContainer/CostcoxShopContainer";
import ShoppingCartPage from "./components/ShoppingCart/ShoppingCartPage";

const App = () => {
  return (
    <>
      <HeaderComponent />
        <div className="mx-5 lg:mx-20">
          <CostcoxShopContainer />        
        </div>
      <FooterComponent />
    </>
  );
};

export default App;
