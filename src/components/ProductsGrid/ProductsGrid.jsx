import { SfButton, SfCounter, SfIconFavorite, SfIconShoppingCart, SfLink, SfRating } from '@storefront-ui/react'
import React from 'react'
const products = [    
    {
      image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1722063-847&recipeName=680',
      title: 'AirPods Pro (2nd generation) with MagSafe Case (USB-C) with AppleCare+ Included',
      rating: '5',
      price: '199',
      link:"#",
      productID:101
    },
    {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=9085085-847&recipeName=680',
        title: 'Samsung 85" Class - QN85C Series - 4K UHD Neo QLED LCD TV - Allstate 3-Year Protection Plan Bundle Included For 5 Years Of Total Coverage',
        rating: '2',
        price: '2,299.99',
        link:"#",
        productID:102
    },
    {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=4000181704-847&recipeName=680',
        title: 'PurpleRenew 11" Gel Grid Mattress',
        rating: '3',
        price: '1399',
        link:"#",
        productID:103
    },
    {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=6660755-847__1&recipeName=350',
        title: 'Whirlpool 19.2 cu. ft. Counter Depth 4 Door Refrigerator with Easy Shelves',
        rating: '4',
        price: '329',
        link:"#",
        productID:104

    },
    {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=3698741-847&recipeName=680',
        title: 'Shark FlexStyle Air Styling & Drying System',
        rating: '2',
        price: '199',
        link:"#",
        productID:105
    },
    {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100498538-847__1&recipeName=350',
        title: 'Greenball Towmaster ST Special Trailer Radial Tire',
        rating: '5',
        price: '109',
        link:"#",
        productID:106
    }, {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1239521-847__1&recipeName=350',
        title: 'Kirkland Signature Ultra Clean HE Liquid Laundry Detergent, 146 loads, 194 fl oz',
        rating: '2',
        price: '18',
        link:"#",
        productID:107
    }, {
        image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1462402-847__1&recipeName=350',
        title: 'Post, Honey Bunches of Oats with Almonds Cereal, 50 oz',
        rating: '1',
        price: 'bg-',
        link:"#",
        productID:108
    }, 
  ];
  

const ProductsGrid = () => {
  return (
    <>
        <div className='mt-10'>
            {/* Title */}
            <h2 className='text-2xl font-semibold mb-5'>Popular Products</h2>
            {/* product Card */}
            <div className='flex flex-col items-center md:flex-row md:flex-wrap justify-center  '>
{products.map((product)=>(
            <div key={product.productID} className="flex flex-col  mb-5 mr-5 border border-neutral-200 rounded-md hover:shadow-lg max-w-[200px] max-h-fit ">
      <div className="relative">
        <SfLink href="#" className="block">
          <img
            src={product.image}
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
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white hover:bg-primary-light active:bg-primary-blue-light ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" className='bg-white hover:bg-primary-light active:bg-primary-light'/>
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200 max-h-44">
        
        <SfLink href="#" variant="secondary" className="no-underline text-sm text-ellipsis">
        {product.title.length > 35 ? `${product.title.substring(0, 35)}...` : product.title}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={product.rating} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>       
        <span className="block pb-2 font-bold typography-text-lg">${product.price}</span>
        <SfButton size="sm" className='bg-primary-blue hover:bg-primary-blue-hover active:bg-primary-blue mb-5' slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
      </div>
    </div>))}
    </div>
        </div>
    </>
  )
}

export default ProductsGrid