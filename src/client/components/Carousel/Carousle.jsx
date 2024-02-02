import { SfScrollable } from '@storefront-ui/react';
import React from 'react';
import {category} from './data'
import "./productCategories.css"
export default function Carousel() {
  return (
    <>
    <div className='mt-5'>
      <p className='text-lg font-semibold'>Product Categories</p>
    </div>
    <SfScrollable wrapperClassName={"categoryScroller"} className=" mt-5 mb-10 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] first-letter:">
      {category.map((category)=>(

    <div
      key={category.id}
      className="flex flex-col items-center justify-center text-gray-500 w-40 h-fit rounded-lg shrink-0  bg-blend-screen border-2 hover:border-[#0096B1] "
    >
      <a className='cursor-pointer'>
      <img src={category.img} alt={category.text}  className='w-44 h-44 object-contain'/>
      <p className='bottom-0  text-center'>{category.text}</p>
      </a>
    </div>))}
      {/* ))} */}
    </SfScrollable>
    </>
  );
}