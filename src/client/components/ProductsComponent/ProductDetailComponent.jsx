import React, { useState } from "react";
import ProductGallery from "../ProductCard/ProductGallery";
import ProductDetailsCard from "../ProductCard/ProductDetailsCard";
import { SfAccordionItem, SfIconChevronLeft } from "@storefront-ui/react";
import classNames from "classnames";
import "./ProductsComponent.css";
import ProductSuggestionSlider from "../ProductCard/ProductSuggestionSlider";

const ProductDetailComponent = () => {
  const [opened, setOpened] = useState([]);

  const isOpen = (id) => opened.includes(id);

  const handleToggle = (id) => (open) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  const renderProoductDescription = () => {
    return (
      <div>
        <SfAccordionItem
          key={"product-details"}
          summary={
            <>
              <h2 className="text-2xl md:text-xl font-bold">Product Details</h2>
              <SfIconChevronLeft
                className={classNames("text-neutral-500", {
                  "rotate-90": isOpen("product-details"),
                  "-rotate-90": !isOpen("product-details"),
                })}
              />
            </>
          }
          onToggle={handleToggle("product-details")}
          open={isOpen("product-details")}
          summaryClassName="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm"
        >
          <div className="py-2">
            <p
              className="text-neutral-900 px-4"
              data-testid="productDescription"
            >
              Premium fabric cut into a great fitting. Original patterns &amp;
              prints. Pair with a dress shirt to complete the look.
            </p>
          </div>
        </SfAccordionItem>
      </div>
    );
  };

  return (
    <div className="max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page pt-5 pb-5">
        <section className="grid-in-left-top md:h-full xl:max-h-[700px]">
          <ProductGallery />
        </section>
        <section className="mb-10 grid-in-right md:mb-0">
          <ProductDetailsCard />
        </section>
        <section className="grid-in-left-bottom md:mt-8">
          <hr className="w-full h-px bg-neutral-200 mb-6" />
          <div className="px-4">
            <div className="flex justify-between mb-2">
              <span className="block text-base font-medium leading-6 text-neutral-900">
                Size
              </span>
              <a
                className="focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm underline hover:text-primary-800 active:text-primary-900 text-neutral-500 typography-text-sm"
                data-testid="link"
                href="#"
              >
                Size Chart
              </a>
            </div>
            <div
              className="mr-2 mb-2 uppercase inline-block"
              data-testid="size-chip-pdp"
            >
              <input
                id=":r1:"
                className="absolute w-0 outline-none appearance-none peer"
                type="checkbox"
                checked=""
              />
              <label
                for=":r1:"
                className="cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline text-sm py-1.5 gap-1.5 pl-3 pr-3 min-w-[48px]"
                data-testid="chip"
              >
                one size
              </label>
            </div>
          </div>
          <hr className="w-full h-px bg-neutral-200 mt-4 mb-2 md:mt-8" />
          {renderProoductDescription()}
          <hr className="w-full h-px bg-neutral-200 my-4" />
        </section>
        {/* Need to check why the slider is not working properly */}
        {/* <section className="mx-4 mt-28 mb-20">
          <p
            data-testid="recommendedProductsHeading"
            className="my-4 text-lg font-headline-3"
          >
            Recommended with this product
          </p>
          <ProductSuggestionSlider />
        </section> */}
      </div>
    </div>
  );
};

export default ProductDetailComponent;
