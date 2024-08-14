import React from 'react'
import ProductCard from '../HomeCard/ProductCard'

function Product() {
  return (
    <>
      <div className="text-center py-6">
          <h4 className="text-2xl font-bold md:text-3xl
              text-green-500">PRODUCTS</h4>
      </div>

      <div className="lg:mx-20">
         <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-8 md:gap-3
          lg:px-8 pb-28'>
         <ProductCard
            name='2kg Red Beef'
            // description=''
            id='ghT-06Qv-90V-000'
            image='src/assets/meat2.png'
            priceInCent={90000}
            />


          <ProductCard 
              name='Basket of Tomatoes'
             image='src/assets/tomato.jpg'
          />
          <ProductCard 
              name='4kg Fresh Shrimps'
             image='src/assets/shrimp.jpg'
          />
          <ProductCard 
              name='6kg Spiced Crabs'
             image='src/assets/crab.jpg'
          />
          <ProductCard 
              name='Fresh Fish'
             image='src/assets/fish03.jpg'
          />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
         </div>
      </div>
    </>
  )
}

export default Product