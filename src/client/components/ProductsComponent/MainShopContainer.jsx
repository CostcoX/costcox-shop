import React, { useRef, useState } from "react";
import FilterComponent from "./FilterComponent";
import ProductCard from "../ProductCard/ProductCard";
import { SfDrawerPlacement, useTrapFocus } from "@storefront-ui/react";

const MainShopContainer = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  // NOTE: Should look why this is causing an error on ssr
  // useTrapFocus(drawerRef, { activeState: open && open });

  return (
    <div className="max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div className="mb-20 px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold mt-4 mb-10">
          All Products
        </h1>
        <div className="md:flex gap-6">
          <FilterComponent
            filterOpen={filterOpen}
            placement={placement}
            nodeRef={nodeRef}
            setFilterOpen={setFilterOpen}
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span class="font-bold font-headings md:text-lg">
                100 Products
              </span>
              <button
                type="button"
                class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent md:hidden whitespace-nowrap"
                data-testid="list-settings-button"
                onClick={() => setFilterOpen(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  data-testid="tune"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block fill-current w-6 h-6 undefined"
                >
                  <path d="M4 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 18c0-.283.096-.52.288-.712A.965.965 0 0 1 4 17h4c.283 0 .521.096.713.288A.967.967 0 0 1 9 18a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 19H4ZM4 7a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 6c0-.283.096-.521.288-.713A.967.967 0 0 1 4 5h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6a.97.97 0 0 1-.287.713A.97.97 0 0 1 12 7H4Zm8 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 20v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 12 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 16v1h7c.283 0 .52.096.712.288A.965.965 0 0 1 21 18c0 .283-.096.52-.288.712A.965.965 0 0 1 20 19h-7v1a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 21Zm-4-6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 14v-1H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h3v-1a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 9a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 10v4a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 15Zm4-2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 12c0-.283.096-.521.288-.713A.967.967 0 0 1 12 11h8a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 13h-8Zm4-4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 8V4c0-.283.096-.521.288-.713A.967.967 0 0 1 16 3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v1h3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 7h-3v1c0 .283-.096.52-.288.712A.965.965 0 0 1 16 9Z"></path>
                </svg>
                List settings
              </button>
            </div>
            <section className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainShopContainer;
