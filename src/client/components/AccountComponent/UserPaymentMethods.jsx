import React from "react";
import amexIcon from "../../../../public/images/payment-icons/amex-icon.svg";
import discoverIcon from "../../../../public/images/payment-icons/discover-icon.svg";
import mastercardIcon from "../../../../public/images/payment-icons/mastercard-icon.svg";
import visaIcon from "../../../../public/images/payment-icons/visa-icon.svg";

const PaymentMethods = [
  {
    imageIcon: visaIcon,
    cardNumber: "1234",
    cardExp: "10/2023",
    cardType: "Visa",
    default: true,
    expired: false,
  },
  {
    imageIcon: mastercardIcon,
    cardNumber: "1234",
    cardExp: "03/2026",
    cardType: "Mastercard",
    default: false,
    expired: false,
  },
  {
    imageIcon: amexIcon,
    cardNumber: "1234",
    cardExp: "12/2026",
    cardType: "American Express",
    default: false,
    expired: false,
  },
  {
    imageIcon: discoverIcon,
    cardNumber: "1234",
    cardExp: "07/2020",
    cardType: "Discover",
    default: false,
    expired: true,
  },
];

const UserPaymentMethods = () => {
  return (
    <>
      <div class="w-full lg:w-9/12 md:w-8/12">
        <div class="py-6 md:p-6 lg:p-10">
          <div class="flex justify-between mb-6 items-center">
            <h2 class="text-xl md:text-2xl font-bold">Payment Methods</h2>
            <a
              href="#"
              class="bg-transparent hover:bg-[#4db6c8] text-[#4db6c8] font-semibold hover:text-white py-2 px-4 border border-[#4db6c8] hover:border-transparent rounded"
              data-bs-toggle="modal"
              data-bs-target="#paymentModal"
            >
              Add Payment
            </a>
          </div>
          <ul class="list-none">
            {PaymentMethods.map((paymentMethod, key) => {
              const blockCursor = paymentMethod.default
                ? "cursor-not-allowed"
                : "";
              return (
                <li class="py-5 px-0">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <img src={paymentMethod.imageIcon} alt="" class="mr-4" />
                      <div>
                        <h5 class="mb-0 text-sm font-semibold">
                          {`${paymentMethod.cardType} ending in ${paymentMethod.cardNumber}`}
                        </h5>
                        <p class="mb-0 text-xs">
                          {`Expires in ${paymentMethod.cardExp}`}
                          {paymentMethod.expired && (
                            <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-warning-400 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none">
                              This card is expired.
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        class={`bg-transparent text-gray-400 border border-gray-400 hover:bg-gray-400 hover:text-white py-1 px-2 rounded-md ${blockCursor}`}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserPaymentMethods;
