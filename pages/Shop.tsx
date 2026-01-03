import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Gammes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection de saveurs authentiques. Des poudres essentielles aux mélanges savants, tout est naturel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;
