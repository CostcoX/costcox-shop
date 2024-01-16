import React, { useState } from 'react'

const AboutUs = () => {
  
  
  return (
    <>
    <div className='flex mt-10 justify-around '>
      <div className='flex flex-col  w-[600px]'>
        <p className='mt-10 text-base md:text-2xl font-bold '>About Costco X</p>
        <p className='text-sm md:text-lg'>Welcome to Costco X – Your Ultimate Destination for Great Deals!
        At Costco X, we're on a mission to bring you the fantastic deals you love from the renowned Costco, all in one convenient online space. While we're not officially affiliated with Costco, our commitment to providing a vast selection of quality products at unbeatable prices is inspired by the Costco spirit.
        </p>
      </div>
      <div className='w-52'>
          <img className='' src='./images/ecommerce.svg'></img>
      </div>
      </div>
      <div className='flex mt-10 justify-around '>
      <div className='w-52'>
          <img className='' src='./images/wide varity.svg'></img>
      </div>
      <div className='flex flex-col  w-[600px]'>
        <p className='mt-10 text-base md:text-2xl font-bold '>Wide Variety, Amazing Discounts</p>
        <p className='text-sm md:text-lg'>Costco X is your go-to destination for a wide variety of products, ranging from electronics and home goods to groceries and beyond. We pride ourselves on offering discounts that make premium products more accessible to you. </p>
      </div>
      
      </div>
    {/* shipping */}
    <div className='flex mt-10 justify-around '>      
      <div className='flex flex-col  w-[600px]'>
        <p className='mt-10 text-base md:text-2xl font-bold '>Nationwide Shipping</p>
        <p className='text-sm md:text-lg'>No matter where you are in the United States, Costco X is here to serve you. Our efficient shipping services ensure that your purchases reach your doorstep in a timely manner, so you can start enjoying your new finds. </p>
      </div>
      <div className='w-52'>
          <img className='' src='./images/shipping.svg'></img>
      </div>
      
      </div>
      <p className='text-center mt-24 text-3xl font-bold text-red-600'>Costco X – where great deals meet convenience!🎁</p>
    </>
  )
}

export default AboutUs