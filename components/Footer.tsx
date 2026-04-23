import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import footerLogo from '../images/lojau.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-900 text-nature-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand */}
          <div>
            <img
              src={footerLogo}
              alt="Logo Goûts & Saveurs"
              className="h-20 w-auto mb-4"
            />
            <p className="text-nature-200 mb-4">
              Des épices 100% naturelles, sans additifs, pour sublimer vos plats et prendre soin de votre santé. L'authenticité du goût avant tout.
            </p>
            <div className="flex space-x-4">
              <a href={COMPANY_INFO.socials.facebook} className="text-nature-300 hover:text-spice-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={COMPANY_INFO.socials.instagram} className="text-nature-300 hover:text-spice-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-spice-400 transition-colors">Accueil</Link></li>
              <li><Link to="/shop" className="hover:text-spice-400 transition-colors">Nos Gammes</Link></li>
              <li><Link to="/about" className="hover:text-spice-400 transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="hover:text-spice-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contactez-nous</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-spice-400 flex-shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-spice-400 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-spice-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nature-700 pt-6 text-center text-sm text-nature-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <span className="hover:text-white cursor-pointer">Mentions Légales</span>
            <span className="hover:text-white cursor-pointer">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
