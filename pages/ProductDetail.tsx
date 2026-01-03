import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Check, ArrowLeft, Truck } from 'lucide-react';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Produit introuvable...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-spice-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Retour aux gammes
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 shadow-lg h-[400px] md:h-[500px]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-spice-600 uppercase tracking-wide mb-2">{product.category}</span>
            <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900 mr-4">{product.price.toLocaleString('fr-FR')} FCFA</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{product.weight}</span>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Bienfaits :</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Usages suggérés :</h3>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((use, idx) => (
                  <span key={idx} className="bg-nature-100 text-nature-800 px-3 py-1 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto border-t border-gray-100 pt-6">
               <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 py-4 px-6 rounded-md font-bold text-lg flex items-center justify-center transition-all ${
                    added 
                    ? 'bg-green-600 text-white' 
                    : 'bg-spice-600 text-white hover:bg-spice-700'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={24} className="mr-2" /> Ajouté
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={24} className="mr-2" /> Ajouter au panier
                    </>
                  )}
                </button>
               </div>
               <p className="text-xs text-gray-500 flex items-center justify-center">
                 <Truck size={16} className="mr-2" /> Livraison disponible partout au pays
               </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
