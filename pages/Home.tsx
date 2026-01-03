import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Star, Heart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3); // Display first 3 products

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-nature-900 h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Épices variées" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            L'Authenticité du Goût,<br/> <span className="text-spice-400">100% Naturel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Découvrez nos épices artisanales sans additifs pour une cuisine saine et savoureuse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="px-8 py-3 bg-spice-600 text-white font-bold rounded-md hover:bg-spice-700 transition-colors flex items-center justify-center gap-2"
            >
              Découvrir nos gammes <ArrowRight size={20} />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-nature-900 transition-colors"
            >
              Notre Histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Pitch */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-nature-50 rounded-lg">
              <div className="inline-block p-4 bg-nature-200 rounded-full mb-4 text-nature-800">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Naturel</h3>
              <p className="text-gray-600">Aucun colorant, aucun conservateur, aucun additif. Juste la plante pure.</p>
            </div>
            <div className="p-6 bg-spice-50 rounded-lg">
              <div className="inline-block p-4 bg-spice-200 rounded-full mb-4 text-spice-800">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Santé & Bien-être</h3>
              <p className="text-gray-600">Des ingrédients sélectionnés pour leurs vertus nutritionnelles et médicinales.</p>
            </div>
            <div className="p-6 bg-nature-50 rounded-lg">
              <div className="inline-block p-4 bg-nature-200 rounded-full mb-4 text-nature-800">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité Artisanale</h3>
              <p className="text-gray-600">Transformation locale respectant les méthodes traditionnelles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Incontournables</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection de nos meilleures ventes pour commencer votre voyage culinaire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/shop" 
              className="inline-flex items-center text-spice-700 font-bold hover:text-spice-900 transition-colors border-b-2 border-spice-600 pb-1"
            >
              Voir tous nos produits <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-spice-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-spice-700 p-8 rounded-lg">
              <div className="flex text-yellow-300 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="italic text-lg mb-6">"Le poisson moulu a transformé ma sauce gombo. Le goût est authentique, comme au village. Je recommande vivement !"</p>
              <div className="font-bold">- Aminata K.</div>
            </div>
            <div className="bg-spice-700 p-8 rounded-lg">
              <div className="flex text-yellow-300 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="italic text-lg mb-6">"Enfin des épices où on sent la vraie odeur du produit. Le piment de table est parfait, ni trop fort ni trop doux."</p>
              <div className="font-bold">- Jean-Marc D.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Rejoignez la famille Goûts & Saveurs</h2>
          <p className="text-gray-600 mb-8">Recevez nos recettes exclusives et offres spéciales directement dans votre boîte mail.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spice-500 focus:outline-none"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-nature-700 text-white font-bold rounded-md hover:bg-nature-800 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
