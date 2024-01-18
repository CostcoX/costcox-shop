import { SfScrollable } from '@storefront-ui/react';
import React from 'react';
import {category} from './data'

export default function Carousel() {
  return (
    <>
    <div className='mt-5'>
      <p className='text-lg font-semibold'>Product Categories</p>
    </div>
    <SfScrollable className="mt-5 mb-10 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] first-letter:">
      {category.map((category)=>(

    <div
      key={category.id}
      className="flex flex-col items-center justify-center text-gray-500 w-40 h-fit rounded-lg shrink-0 hover:shadow-xl bg-blend-screen active:border-2 "
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