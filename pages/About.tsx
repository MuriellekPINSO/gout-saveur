import React from 'react';
import { Leaf, Users, ShieldCheck, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <div className="bg-nature-800 text-white py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 text-nature-100">
          Une passion pour le goût, un respect pour la nature.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              "Goûts & Saveurs" est né d'un constat simple : la difficulté de trouver des épices authentiques, sans glutamate et sans additifs chimiques sur le marché local.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fondée en 2021 par une passionnée de gastronomie béninoise, notre marque s'est donné pour mission de réhabiliter les saveurs d'antan. Nous parcourons les marchés ruraux et travaillons directement avec des petits producteurs pour sélectionner les meilleures matières premières (poissons séchés, crevettes, piments, écorces).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aujourd'hui, nous sommes fiers d'offrir une gamme de produits sains qui simplifient la cuisine quotidienne tout en préservant la santé de nos consommateurs.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Marché local d'épices" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-nature-50 rounded-lg">
              <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm text-nature-700">
                <Leaf size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Naturalité</h3>
              <p className="text-sm text-gray-600">Produits 100% naturels, zéro produit chimique.</p>
            </div>
            <div className="text-center p-6 bg-nature-50 rounded-lg">
              <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm text-nature-700">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualité</h3>
              <p className="text-sm text-gray-600">Hygiène irréprochable du séchage au conditionnement.</p>
            </div>
            <div className="text-center p-6 bg-nature-50 rounded-lg">
              <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm text-nature-700">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Proximité</h3>
              <p className="text-sm text-gray-600">Soutien aux producteurs locaux et écoute client.</p>
            </div>
            <div className="text-center p-6 bg-nature-50 rounded-lg">
              <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm text-nature-700">
                <Globe size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Moderniser la tradition sans la dénaturer.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
           <div className="text-center mb-10">
             <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Notre Processus</h2>
             <p className="text-gray-600">Du champ à votre assiette, chaque étape compte.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sélection" className="w-full h-48 object-cover rounded-md mb-4" />
                 <h3 className="font-bold text-xl mb-2">1. Sélection</h3>
                 <p className="text-gray-600 text-sm">Choix rigoureux des matières premières fraîches et saines.</p>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1589927986089-35812378d995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Séchage" className="w-full h-48 object-cover rounded-md mb-4" />
                 <h3 className="font-bold text-xl mb-2">2. Préparation</h3>
                 <p className="text-gray-600 text-sm">Nettoyage minutieux et séchage solaire ou au four doux.</p>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Transformation" className="w-full h-48 object-cover rounded-md mb-4" />
                 <h3 className="font-bold text-xl mb-2">3. Mouture</h3>
                 <p className="text-gray-600 text-sm">Broyage fin et conditionnement hermétique immédiat.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
