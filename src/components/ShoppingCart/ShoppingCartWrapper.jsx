import React, { useState } from 'react'
import ShoppingCartPage from './ShoppingCartPage'
import OrderSummary from '../OrderSummary/OrderSummary'
const cartProduct=[{
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png',
    title: 'shoe',
    rating: '2',
    price: 500,
    link:"#"
    
  },{
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png',
    title: 'mouse',
    rating: '2',
    price: 1000,
    link:"#"
  }]
export const ShoppingCartWrapper = () => {
    const [subtotal, setSubtotal] = useState(0);
    
    const updateSubtotal = (productId, productSubtotal) => {
        // Update subtotal when a product subtotal changes
        setSubtotal((prevSubtotal) =>  productSubtotal-prevSubtotal);
      };
      console.log(subtotal,"subtotal");
  return (
    <>
            <h1 className='mt-5 text-4xl font-bold ml-10'> My Cart</h1>

       <div className='flex flex-col lg:flex-row  '>
        <div className='flex flex-col'>
    {cartProduct.map((products,key)=>{
        return <ShoppingCartPage product={products} key={key} updateSubtotal={updateSubtotal}/>

    })}
    </div>
    {/* order */}
    <div className='w-full flex justify-center '> 
            {/* <OrderSummary /> */}
             <OrderSummary /> 
         </div>
</div>
</>
    
  )
}
