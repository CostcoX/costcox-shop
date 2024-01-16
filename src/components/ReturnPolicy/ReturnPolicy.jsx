import React from 'react'

const ReturnPolicy = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col'>
        <p className=' justify-self-center text-center w-full mt-10 bg-[#0096B1] px-10 py-2 text-white text-lg font-bold rounded-lg'>CostcoX's ReturnPolicy</p>
            <div className='flex flex-col items-center'>
                 <p className='text-red-700 font-bold text-base mt-3 md:text-lg'>Return Policy: No Returns Accepted ❌</p>
                 <p className='mt-2 text-base font-semibold'>At Costco X, we strive to provide our customers with the best shopping experience possible. To maintain our commitment to transparency and efficiency, we have established a no-return policy.
Please carefully review your order before completing the purchase. Once an order is placed and confirmed, we do not accept returns or exchanges. This policy extends to all products across our diverse range of categories.
<br/><br/><span className='text-lg font-bold underline'>Contact Us: </span> If you have any questions or concerns regarding our no-return policy, please don't hesitate to contact our customer service team.
We appreciate your understanding and thank you for choosing Costco X for your online shopping needs.
</p>
            </div>
    </div>
    </>
  )
}

export default ReturnPolicy