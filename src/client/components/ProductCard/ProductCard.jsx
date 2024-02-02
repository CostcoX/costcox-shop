import React from "react";
import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconShoppingCart,
  SfIconFavorite,
} from "@storefront-ui/react";

const ProductCard = () => {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg flex flex-col">
      <div className="relative">
        <SfLink href="#" className="block">
          <img
            src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white hover:bg-red-300 active:bg-red-300 ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" className='bg-transparent text-red-700 active:text-white   ' />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          Athletic mens walking sneakers
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={5} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>
        <span className="block pb-2 font-bold typography-text-lg">
          $2345,99
        </span>
        <SfButton size="sm" variant="tertiary" className="bg-[#0096B1] text-white border-[#0096B1] hover:bg-[#0096B1] hover:text-white active:bg-[#00879f] active:text-white" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
      </div>
    </div>
  );
};

export default ProductCard;
