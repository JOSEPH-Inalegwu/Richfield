import React from 'react';
import ProductCard from '../HomeCard/ProductCard';
import products from '../../../data/products.json';

function Product() {
  return (
    <>
      <div className="text-center py-6">
        <h4 className="text-2xl font-bold md:text-3xl text-green-500">PRODUCTS</h4>
      </div>

      <div className="lg:mx-20">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 md:gap-3 lg:px-8 pb-28">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              id={product.id}
              image={product.image}
              priceInCent={product.priceInCent}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
