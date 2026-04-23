import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { COMPANY_INFO, FEDAPAY_CONFIG } from '../constants';

type PaymentStatus = 'idle' | 'collecting_info' | 'processing' | 'success' | 'failed';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [customerInfo, setCustomerInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
  });
  const [transactionRef, setTransactionRef] = useState<string | null>(null);

  // Build order description
  const buildOrderDescription = useCallback(() => {
    const items = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    return `Commande Goûts & Saveurs: ${items}`;
  }, [cart]);

  // Launch FedaPay Checkout
  const handleFedaPayCheckout = useCallback(() => {
    if (!customerInfo.firstname || !customerInfo.lastname || !customerInfo.email || !customerInfo.phone) {
      return;
    }

    setPaymentStatus('processing');

    try {
      const widget = FedaPay.init({
        public_key: FEDAPAY_CONFIG.publicKey,
        transaction: {
          amount: cartTotal,
          description: buildOrderDescription(),
          callback_url: window.location.href,
        },
        currency: {
          iso: 'XOF',
        },
        customer: {
          email: customerInfo.email,
          firstname: customerInfo.firstname,
          lastname: customerInfo.lastname,
          phone_number: {
            number: customerInfo.phone,
            country: 'bj',
          },
        },
        onComplete(resp: any) {
          const FedaPayGlobal = (window as any)['FedaPay'];
          if (resp.reason === FedaPayGlobal.DIALOG_DISMISSED) {
            console.log('Dialog dismissed');
            setPaymentStatus('failed');
          } else {
            console.log('Transaction terminée:', resp.reason);
            console.log('Transaction:', resp.transaction);
            setTransactionRef(resp.transaction?.reference || `#${resp.transaction?.id}`);
            setPaymentStatus('success');
            clearCart();
          }
        },
      });

      widget.open();
    } catch (error) {
      console.error('FedaPay init error:', error);
      setPaymentStatus('failed');
    }
  }, [customerInfo, cartTotal, cart, buildOrderDescription, clearCart]);

  const handleWhatsAppOrder = () => {
    let message = "Bonjour, je souhaite commander :\n";
    cart.forEach(item => {
      message += `- ${item.name} (${item.weight}) x${item.quantity}\n`;
    });
    message += `\nTotal: ${cartTotal.toLocaleString('fr-FR')} FCFA`;

    const url = `https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFedaPayCheckout();
  };

  // ─── Empty cart state ───
  if (cart.length === 0 && paymentStatus !== 'success') {
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

  // ─── Payment Success state ───
  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="bg-green-100 p-6 rounded-full mb-6 animate-bounce">
          <CheckCircle size={64} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Paiement réussi ! 🎉</h2>
        <p className="text-gray-600 mb-2 max-w-md">
          Merci pour votre commande chez <strong>Goûts & Saveurs</strong>.
        </p>
        {transactionRef && (
          <p className="text-sm text-gray-500 mb-6">
            Référence de transaction : <span className="font-mono font-bold text-spice-700">{transactionRef}</span>
          </p>
        )}
        <p className="text-gray-600 mb-8 max-w-md">
          Nous vous contacterons pour organiser la livraison. Un reçu a été envoyé à votre adresse email.
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

  // ─── Payment Failed state ───
  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="bg-red-100 p-6 rounded-full mb-6">
          <XCircle size={64} className="text-red-500" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Paiement non complété</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Le paiement a été annulé ou n'a pas pu aboutir. Votre panier est toujours intact, vous pouvez réessayer.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setPaymentStatus('collecting_info')}
            className="px-8 py-3 bg-spice-600 text-white font-bold rounded-md hover:bg-spice-700 transition-colors"
          >
            Réessayer le paiement
          </button>
          <Link 
            to="/shop" 
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    );
  }

  // ─── Processing state ───
  if (paymentStatus === 'processing') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="mb-6">
          <Loader2 size={64} className="text-spice-600 animate-spin" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Paiement en cours...</h2>
        <p className="text-gray-600 max-w-md">
          La fenêtre de paiement FedaPay va s'ouvrir. Veuillez compléter le paiement.
        </p>
      </div>
    );
  }

  // ─── Main cart view ───
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

              {paymentStatus === 'idle' ? (
                <div className="space-y-3">
                  <button 
                    onClick={() => setPaymentStatus('collecting_info')}
                    className="w-full bg-spice-600 text-white font-bold py-3 rounded-md hover:bg-spice-700 transition-all duration-200 flex justify-center items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <CreditCard size={20} />
                    Payer avec FedaPay
                  </button>
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-all duration-200 flex justify-center items-center gap-2"
                  >
                    Commander via WhatsApp
                  </button>
                </div>
              ) : paymentStatus === 'collecting_info' ? (
                <form onSubmit={handleInfoSubmit} className="space-y-4 animate-fade-in">
                  <h3 className="font-bold border-b pb-2 mb-2 flex items-center gap-2">
                    <CreditCard size={18} className="text-spice-600" />
                    Vos coordonnées
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      required 
                      type="text" 
                      placeholder="Prénom" 
                      value={customerInfo.firstname}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, firstname: e.target.value }))}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-spice-500 focus:border-spice-500 outline-none transition-all" 
                    />
                    <input 
                      required 
                      type="text" 
                      placeholder="Nom" 
                      value={customerInfo.lastname}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, lastname: e.target.value }))}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-spice-500 focus:border-spice-500 outline-none transition-all" 
                    />
                  </div>
                  <input 
                    required 
                    type="email" 
                    placeholder="Email" 
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-spice-500 focus:border-spice-500 outline-none transition-all" 
                  />
                  <input 
                    required 
                    type="tel" 
                    placeholder="Téléphone (ex: 97000000)" 
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-spice-500 focus:border-spice-500 outline-none transition-all" 
                  />
                  <textarea 
                    placeholder="Adresse de livraison (optionnel)" 
                    rows={2} 
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-spice-500 focus:border-spice-500 outline-none transition-all"
                  ></textarea>
                  
                  <div className="flex gap-2 pt-2">
                    <button 
                      type="button"
                      onClick={() => setPaymentStatus('idle')}
                      className="w-1/3 border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      Retour
                    </button>
                    <button 
                      type="submit"
                      className="w-2/3 bg-spice-600 text-white font-bold py-2 rounded hover:bg-spice-700 transition-all duration-200 flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <CreditCard size={18} />
                      Payer {cartTotal.toLocaleString('fr-FR')} FCFA
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 text-center mt-2">
                    Paiement sécurisé par FedaPay · Mobile Money & Cartes
                  </p>
                </form>
              ) : null}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
