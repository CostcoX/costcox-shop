import React from 'react'
import Hero from '../Hero/Hero'
import Carousel from '../Carousel/Carousle'
import Carousel2 from '../Carousel/Carousel2'
import ProductsGrid from '../ProductsGrid/ProductsGrid'
import FeatureCard from '../FeatureCard/FeatureCard'
const CostcoXShopComponent = () => {  
  const accordionItems = [
    {
      title: 'About Costco X',
      content: `Welcome to Costco X – Your Ultimate Destination for Great Deals!
      At Costco X, we're on a mission to bring you the fantastic deals you love from the renowned Costco, all in one convenient online space. While we're not officially affiliated with Costco, our commitment to providing a vast selection of quality products at unbeatable prices is inspired by the Costco spirit.
      `,
    },
    {
      title: 'Why Costco X?',
      content: `Imagine having access to the incredible deals found in Costco's "Deals" section, right at your fingertips. That's exactly what Costco X offers. Our carefully curated selection spans various categories, ensuring you find everything you need at prices that make you smile.`,
    },
    {
      title: 'Nationwide Shipping',
      content: `No matter where you are in the United States, Costco X is here to serve you. Our efficient shipping services ensure that your purchases reach your doorstep in a timely manner, so you can start enjoying your new finds.`,
    }
   
  ];
 
  return (
    <>
        <Hero/>
        <Carousel/>
        <Carousel2/>
        <ProductsGrid/>
        <FeatureCard items={accordionItems} />
    </>
  )
}

export default CostcoXShopComponent
