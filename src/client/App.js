import React from "react";
import { Provider } from "react-redux";
import store from "../client/store/store";
import "./app.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CostcoxShopContainer from "./components/CostcoxShopContainer/CostcoxShopContainer";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const isCheckout = pathname === "/checkout";
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <div className={!isCheckout ? "mx-5 lg:mx-20" : ""}>
          <CostcoxShopContainer />
        </div>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default App;
