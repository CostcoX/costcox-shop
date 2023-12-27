import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  SfIconShoppingCart,
  SfIconPerson,
  SfIconCreditCard,
  SfIconLocationOn,
  SfIconLogout,
} from "@storefront-ui/react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <section>
      <div className="account-settings-container">
        <div className="flex flex-col md:flex-row h-full">
          <div className="account-settings-nav basis-1/4">
            <div className="account-settings-menu">
              <ul className="flex flex-row gap-1 md:flex-wrap list-none w-56 md:pl-0 md:mb-0 md:flex-col nav-pills-dark">
                <li className="account-settings-menu-items">
                  <NavLink
                    className="menu-item"
                    activeClassName="active"
                    to="orders"
                  >
                    <SfIconShoppingCart size="sm" />
                    <span>Your Orders</span>
                  </NavLink>
                </li>
                <li className="account-settings-menu-items">
                  <NavLink
                    className="menu-item"
                    activeClassName="active"
                    to="settings"
                  >
                    <SfIconPerson size="sm" />
                    <span>Settings</span>
                  </NavLink>
                </li>
                <li className="account-settings-menu-items">
                  <NavLink
                    className="menu-item"
                    activeClassName="active"
                    to="address"
                  >
                    <SfIconLocationOn size="sm" />
                    <span>Address</span>
                  </NavLink>
                </li>
                <li className="account-settings-menu-items">
                  <NavLink
                    className="menu-item"
                    activeClassName="active"
                    to="payments"
                  >
                    <SfIconCreditCard size="sm" />
                    <span>Payment Method</span>
                  </NavLink>
                </li>
                <hr />
                <li className="account-settings-menu-items">
                  <a className="menu-item">
                    <SfIconLogout size="sm" />
                    <span>Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="account-settings-content basis-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
