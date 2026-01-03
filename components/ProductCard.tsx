import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-4">
            <Link 
              to={`/product/${product.id}`} 
              className="bg-white p-3 rounded-full text-gray-800 hover:text-spice-600 hover:bg-spice-50 transition-colors"
              title="Voir détails"
            >
              <Eye size={20} />
            </Link>
            <button 
              onClick={() => addToCart(product)}
              className="bg-spice-600 p-3 rounded-full text-white hover:bg-spice-700 transition-colors"
              title="Ajouter au panier"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-nature-600">{product.category}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.weight}</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-spice-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.shortDescription}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="font-bold text-lg text-spice-700">{product.price.toLocaleString('fr-FR')} FCFA</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-sm font-medium text-spice-600 hover:text-spice-800 underline decoration-2 underline-offset-4"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
