import { SfButton } from '@storefront-ui/react';
import React from 'react';
export default function Hero() {

  return (
    <div className="relative max-h-[600px] border-2 mt-10">
      <picture>
        <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png" media="(min-width: 768px)" />
        <img
          src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
          className="absolute w-full h-full z-[-1] md:object-cover"
        />
      </picture>
      <div className="md:flex md:flex-row-reverse md:justify-center max-h-[600px] max-w-[1536px] mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img
            src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-headphones.png"
            alt="Headphones"
            className="h-full object-fit object-left"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Feel the music
          </p>
          <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p className="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 ">
            {/* <SfButton className='bg-[#0096B1] hover:bg-[#00879f]' size="lg"> Order now </SfButton> */}
            <SfButton size="lg"  className="!bg-white border-2 !text-[#0096B1] !border-[#0096B1] hover:!bg-[#0096B1] hover:!text-white" >
              Show more
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}