import React, { useId, ChangeEvent, useState, useEffect } from "react";
import {
  SfButton,
  SfIconAdd,
  SfIconDelete,
  SfIconRemove,
  SfIconSell,
  SfLink,
} from "@storefront-ui/react";
import { useCounter } from "react-use";
import { clamp } from "@storefront-ui/shared";
import OrderSummary from "../OrderSummary/OrderSummary";

const ShoppingCartPage = ({ product, key, updateSubtotal }) => {
  const inputId = useId();
  const min = 1;
  const max = 10;
  const [total, setTotal] = useState(product.price);

  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }

  useEffect(() => {
    setTotal(product.price * value);
    updateSubtotal(product.id, total);
  }, [value]);

  return (
    <>
      {/* cart Items */}
      <div className="flex flex-col">
        <div className="flex " key={key}>
          <div className="relative flex justify-items-center border-b-[1px] border-neutral-200 hover:shadow-lg w-full min-w-[270px] p-4">
            <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
              <SfLink href="#">
                <img
                  className="w-full h-auto border rounded-md border-neutral-200"
                  src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/smartwatch.png"
                  alt="alt"
                  width="300"
                  height="300"
                />
              </SfLink>
            </div>
            <div className="flex flex-col pl-4 min-w-[180px] flex-1">
              <SfLink
                href="#"
                variant="secondary"
                className="no-underline typography-text-sm sm:typography-text-lg"
              >
                {product.title}
              </SfLink>
              <div className="my-2 sm:mb-0">
                <ul className="text-base font-normal leading-5 sm:typography-text-sm text-neutral-700">
                  <li>
                    <span className="mr-1">Size:</span>
                    <span className="font-medium">6.5</span>
                  </li>
                  <li>
                    <span className="mr-1">Color:</span>
                    <span className="font-medium">Red</span>
                  </li>
                  <li>
                    <span className="mr-1">Price</span>
                    <span className="font-medium">{product.price}</span>
                  </li>
                </ul>
              </div>
              <div className="items-center sm:mt-auto sm:flex">
                {/* price */}
                <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">
                  {total}
                </span>
                <div className="flex items-center justify-between mt-4 sm:mt-0">
                  <div className="flex border border-neutral-300 rounded-md">
                    <SfButton
                      variant="tertiary"
                      square
                      className="rounded-r-none"
                      disabled={value <= min}
                      aria-controls={inputId}
                      aria-label="Decrease value"
                      onClick={() => dec()}
                    >
                      <SfIconRemove />
                    </SfButton>
                    <input
                      id={inputId}
                      type="number"
                      role="spinbutton"
                      className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                      min={min}
                      max={max}
                      value={value}
                      onChange={handleOnChange}
                    />
                    <SfButton
                      variant="tertiary"
                      square
                      className="rounded-l-none"
                      disabled={value >= max}
                      aria-controls={inputId}
                      aria-label="Increase value"
                      onClick={() => inc()}
                    >
                      <SfIconAdd />
                    </SfButton>
                  </div>
                  <button
                    aria-label="Remove"
                    type="button"
                    className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
                  >
                    <SfIconDelete />
                    <span className="hidden ml-1.5 sm:block"> Remove </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
