import React from "react";

const CheckoutContainer = () => {
  return (
    <div className="max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div className="px-4 md:px-0 mb-20">
        <div className="flex justify-between mt-8 mb-10">
          {/* <h1 className="text-lg md:typography-headline-2 font-bold">
            Checkout
          </h1> */}
          <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
          <a className="flex inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent md:hidden whitespace-nowrap">
            Back
          </a>
          <a
            class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex"
            data-testid="button"
            href="/cart"
          >
            <svg
              viewBox="0 0 24 24"
              data-testid="arrow-back"
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block fill-current w-6 h-6 undefined"
            >
              <path d="m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z"></path>
            </svg>
            Back
          </a>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-x-6">
          <div className="col-span-7">
            <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0" />
            <div data-testid="contact-information" class="md:px-4 py-6">
              <div class="flex justify-between items-center">
                <h2 class="text-xl text-neutral-900 font-bold mb-4">
                  Contact Information
                </h2>
              </div>
              <div class="w-full md:max-w-[520px]">
                <p>
                  Add your email and phone number to communicate with the store.
                </p>
                <button
                  type="button"
                  class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                  data-testid="addButton"
                >
                  Add contact information
                </button>
              </div>
            </div>
            <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0" />
            <div data-testid="checkout-address" class="md:px-4 py-6">
              <div class="flex justify-between items-center">
                <h2 class="text-xl text-neutral-900 font-bold mb-4">
                  Billing Address
                </h2>
              </div>
              <div class="w-full md:max-w-[520px]">
                <p>
                  Add a billing address. You will receive the invoice to the
                  email address provided above.
                </p>
                <button
                  type="button"
                  class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                  data-testid="addButton"
                >
                  Add billing address
                </button>
              </div>
            </div>
            <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0" />
            <div data-testid="checkout-address" class="md:px-4 py-6">
              <div class="flex justify-between items-center">
                <h2 class="text-xl text-neutral-900 font-bold mb-4">
                  Shipping Address
                </h2>
              </div>
              <div class="w-full md:max-w-[520px]">
                <p>Add a shipping address to view shipping details.</p>
                <button
                  type="button"
                  class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                  data-testid="addButton"
                >
                  Add shipping address
                </button>
              </div>
            </div>
            <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0" />
            <div data-testid="shipping-method" class="md:px-4 my-6">
              <div class="flex justify-between items-center">
                <h3 class="text-xl text-neutral-900 font-bold">
                  Shipping details
                </h3>
              </div>
              <div class="mt-4">
                <div class="flex mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    data-testid="block"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block fill-current w-6 h-6 mr-2 text-neutral-500"
                  >
                    <path d="M12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-.9-.146-1.767-.438-2.6A7.94 7.94 0 0 0 18.3 7.1L7.1 18.3c.7.55 1.467.97 2.3 1.262.833.292 1.7.438 2.6.438Zm-6.3-3.1L16.9 5.7a7.96 7.96 0 0 0-2.3-1.262A7.805 7.805 0 0 0 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 .9.146 1.767.438 2.6.291.833.712 1.6 1.262 2.3Z"></path>
                  </svg>
                  <p>Not available until a shipping address is provided.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Order Summary section starts from here */}
          <div className="col-span-5 md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 md:mb-10 h-fit">
            <div
              class="flex justify-between items-center md:items-end mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0"
              data-testid="totalInCart"
            >
              <h2 class="text-3xl md:text-2xl font-bold">Order Summary</h2>
              <span class="font-medium">(Items: 1)</span>
            </div>
            <div class="flex justify-between items-start">
              <span>Items subtotal</span>
              <div class="flex items-end">
                <div class="flex flex-col items-end mr-2"></div>
                <div class="flex flex-col items-end">
                  <p data-testid="specialPrice">$298.75</p>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-start mt-3">
              <p>Delivery</p>
              <p data-testid="deliveryCost">--</p>
            </div>
            <div class="flex justify-between items-start mt-3">
              <p>Estimated Sales Tax</p>
              <p data-testid="tax">$0.00</p>
            </div>
            <hr class="w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto" />
            <div class="flex justify-between items-end mb-5">
              <h2 class="text-xl md:text-lg font-bold">Total</h2>
              <h2 class="text-xl md:text-lg font-bold" data-testid="total">
                $298.75
              </h2>
            </div>
            <hr class="w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto" />
            <button
              type="button"
              class="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full flex items-center h-[48px]"
              data-testid="placeOrder"
            >
              Place order and pay
            </button>
            <p class="text-sm text-center mt-4 pb-4 md:pb-0">
              By placing my order, you agree to our{" "}
              <a
                class="focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
                data-testid="link"
                href="/checkout#"
              >
                Terms and Conditions
              </a>{" "}
              and our{" "}
              <a
                class="focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
                data-testid="link"
                href="/checkout#"
              >
                Privacy Policy
              </a>
            </p>
            <hr class="w-full h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
