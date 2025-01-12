import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPageComponent from "../AccountComponent/LoginPageComponent";
import AccountSettings from "../AccountComponent/AccountSettings";
import UserOrdersComponent from "../AccountComponent/UserOrdersComponent";
import UserSettingsComponent from "../AccountComponent/UserSettingsComponent";
import UserAddressComponent from "../AccountComponent/UserAddressComponent";
import UserPaymentMethods from "../AccountComponent/UserPaymentMethods";
import MainShopContainer from "../ProductsComponent/MainShopContainer";
import ProductDetailComponent from "../ProductsComponent/ProductDetailComponent";
import CostcoXShopComponent from "../CostcoXShopComponent/CostcoXShopComponent";
import ShoppingCartPage from "../ShoppingCart/ShoppingCartPage";
import { ShoppingCartWrapper } from "../ShoppingCart/ShoppingCartWrapper";
import ReturnPolicy from "../ReturnPolicy/ReturnPolicy";
import AboutUs from "../AboutUs/AboutUs";
import CheckoutContainer from "../checkout/CheckoutContainer";

const CostcoxShopContainer = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPageComponent />} />
      <Route exact path="/register" element={<LoginPageComponent />} />
      <Route path="/account-settings" element={<AccountSettings />}>
        <Route path="orders" element={<UserOrdersComponent />} />
        <Route path="settings" element={<UserSettingsComponent />} />
        <Route path="address" element={<UserAddressComponent />} />
        <Route path="payments" element={<UserPaymentMethods />} />
      </Route>
      <Route exact path="/shop" element={<MainShopContainer />} />
      <Route path="/products/:id" element={<ProductDetailComponent />} />
      <Route exact path="/" element={<CostcoXShopComponent />} />
      <Route exact path="/cart" element={<ShoppingCartWrapper />} />
      <Route exact path="/return-policy" element={<ReturnPolicy />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/checkout" element={<CheckoutContainer />} />
    </Routes>
  );
};

export default CostcoxShopContainer;
