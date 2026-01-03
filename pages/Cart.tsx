import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-full mb-6 shadow-sm">
          <ShoppingBag size={64} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
        <p className="text-gray-600 mb-8">Découvrez nos épices et commencez à cuisiner !</p>
        <Link 
          to="/shop" 
          className="px-8 py-3 bg-spice-600 text-white font-bold rounded-md hover:bg-spice-700 transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send data to a backend
    // For this demo, we can just clear cart and show success
    setOrderPlaced(true);
    clearCart();
    window.scrollTo(0,0);
  };

  const handleWhatsAppOrder = () => {
    // Construct WhatsApp message
    let message = "Bonjour, je souhaite commander :\n";
    cart.forEach(item => {
      message += `- ${item.name} (${item.weight}) x${item.quantity}\n`;
    });
    message += `\nTotal: ${cartTotal.toLocaleString('fr-FR')} FCFA`;
    
    const url = `https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="bg-green-100 p-6 rounded-full mb-6">
          <div className="text-green-600 font-bold text-4xl">✓</div>
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Merci pour votre commande !</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Nous avons bien reçu votre demande. Un email de confirmation vous a été envoyé. Nous vous contacterons pour la livraison.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-nature-700 text-white font-bold rounded-md hover:bg-nature-800 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-md" 
                    />
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.weight}</p>
                      <p className="text-spice-600 font-bold mt-1">{item.price.toLocaleString('fr-FR')} FCFA</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium w-8 text-center">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Retirer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Récapitulatif</h2>
              
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Sous-total</span>
                <span>{cartTotal.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Livraison</span>
                <span className="text-sm italic">Calculé à l'étape suivante</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>{cartTotal.toLocaleString('fr-FR')} FCFA</span>
                </div>
              </div>

              {!showCheckout ? (
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-spice-600 text-white font-bold py-3 rounded-md hover:bg-spice-700 transition-colors flex justify-center items-center gap-2"
                  >
                    Valider la commande <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors flex justify-center items-center gap-2"
                  >
                    Commander via WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4 animate-fade-in">
                  <h3 className="font-bold border-b pb-2 mb-2">Vos coordonnées</h3>
                  <input required type="text" placeholder="Nom complet" className="w-full p-2 border rounded" />
                  <input required type="email" placeholder="Email" className="w-full p-2 border rounded" />
                  <input required type="tel" placeholder="Téléphone" className="w-full p-2 border rounded" />
                  <textarea required placeholder="Adresse de livraison" rows={2} className="w-full p-2 border rounded"></textarea>
                  
                  <div className="flex gap-2 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="w-1/3 border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-50"
                    >
                      Annuler
                    </button>
                    <button 
                      type="submit"
                      className="w-2/3 bg-spice-600 text-white font-bold py-2 rounded hover:bg-spice-700"
                    >
                      Confirmer
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
