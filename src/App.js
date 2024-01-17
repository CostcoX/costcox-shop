import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./app.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CostcoxShopContainer from "./components/CostcoxShopContainer/CostcoxShopContainer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <div className="mx-5 lg:mx-20">
          <CostcoxShopContainer />
        </div>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default App;
