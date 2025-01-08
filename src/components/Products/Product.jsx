import React from 'react';
import ProductCard from '../HomeCard/ProductCard';
import products from '../../../data/products.json';

function Product() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="lg:mx-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 md:gap-3 lg:px-5 pb-28">
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
    </div>
  );
}

export default Product;
