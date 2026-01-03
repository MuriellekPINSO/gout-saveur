import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of email sending
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-gray-600">Une question sur nos produits ou une commande ? Nous sommes là pour vous.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Card */}
          <div className="bg-nature-800 text-white rounded-lg p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-8">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-spice-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Téléphone / WhatsApp</h3>
                    <p className="text-nature-200">{COMPANY_INFO.phone}</p>
                    <a href={COMPANY_INFO.socials.whatsapp} className="text-spice-400 text-sm hover:underline mt-1 block">
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-spice-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-nature-200">{COMPANY_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-spice-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Adresse</h3>
                    <p className="text-nature-200">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-nature-700 p-3 rounded-full hover:bg-spice-600 transition-colors">Facebook</a>
                <a href="#" className="bg-nature-700 p-3 rounded-full hover:bg-spice-600 transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Envoyez un message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Merci !</strong>
                <span className="block sm:inline"> Votre message a bien été envoyé. Nous vous répondrons bientôt.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-spice-600 text-white font-bold py-3 px-4 rounded-md hover:bg-spice-700 transition-colors flex items-center justify-center gap-2"
                >
                  Envoyer <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
