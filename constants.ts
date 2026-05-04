import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Poisson Moulu',
    shortDescription: 'Un assaisonnement naturel issu de poissons soigneusement séchés et moulus.',
    longDescription: 'Un assaisonnement naturel issu de poissons soigneusement séchés et moulus. Il apporte une touche riche, authentique et profondément aromatique à vos sauces, soupes et plats traditionnels. Idéal pour renforcer le goût sans cube ni additif.',
    price: 3500,
    weight: '100g',
    image: '/images/Image-Poisson-moulu.jpg',
    benefits: ['Riche en protéines', 'Sans sel ajouté', '100% Naturel'],
    uses: ['Sauce gombo', 'Soupes de légumes', 'Assaisonnement riz'],
    category: 'Powders'
  },
  {
    id: 'p2',
    name: 'Crevette Moulue',
    shortDescription: 'Conçue à base de crevettes séchées 100 % naturelles.',
    longDescription: 'Conçue à base de crevettes séchées 100 % naturelles, cette poudre fine sublime vos plats avec une saveur marine délicate et irrésistible. Parfaite pour les sauces, riz, pâtes et mets traditionnels béninois.',
    price: 4000,
    weight: '100g',
    image: '/images/Image-Crevette-moulu.jpg',
    benefits: ['Goût intense', 'Riche en minéraux', 'Sans conservateur'],
    uses: ['Ragoûts', 'Marinades', 'Plats de riz'],
    category: 'Powders'
  },
  {
    id: 'p3',
    name: 'Curcuma',
    shortDescription: 'Épice dorée aux puissants bienfaits naturels.',
    longDescription: 'Épice dorée aux puissants bienfaits naturels, le curcuma apporte chaleur, couleur et douceur aromatique à tout type de préparation. Idéal pour relever vos plats tout en favorisant une cuisine saine et équilibrée.',
    price: 2500,
    weight: '80g',
    image: '/images/Image-Curcuma.jpg',
    benefits: ['Anti-inflammatoire', 'Antioxydant', 'Colore naturellement'],
    uses: ['Currys', 'Lait d’or', 'Assaisonnement volaille'],
    category: 'Spices'
  },
  {
    id: 'p4',
    name: 'Piment de Table',
    shortDescription: 'Un piment finement moulu, équilibré et aromatique.',
    longDescription: 'Un piment finement moulu, équilibré et aromatique, conçu pour relever délicatement vos repas au quotidien. Il apporte du caractère sans agresser le palais, parfait pour accompagner toutes vos assiettes.',
    price: 2000,
    weight: '60g',
    image: '/images/Image-Piment-de-table.jpg',
    benefits: ['Stimule le métabolisme', 'Riche en vitamine C', 'Appétissant'],
    uses: ['Saupoudrage', 'Vinaigrettes', 'Grillades'],
    category: 'Spices'
  },
  {
    id: 'p5',
    name: 'Piment Rouge',
    shortDescription: 'Un piment plus intense, vif et chaleureux.',
    longDescription: 'Un piment plus intense, vif et chaleureux pour les amateurs de sensations fortes. Idéal pour épicer sauces, grillades, marinades et plats traditionnels qui demandent une touche audacieuse.',
    price: 2200,
    weight: '60g',
    image: '/images/Piment-rouge-image.jpg',
    benefits: ['Fort pouvoir piquant', 'Exalte les saveurs', 'Naturel'],
    uses: ['Sauces pimentées', 'Marinades épicées', 'Plats en sauce'],
    category: 'Spices'
  },
  {
    id: 'p6',
    name: 'Mélange d’Épices',
    shortDescription: 'Un mix harmonieux d’épices naturelles soigneusement sélectionnées.',
    longDescription: 'Un mix harmonieux d’épices naturelles soigneusement sélectionnées pour offrir un goût riche, complet et prêt à l’emploi. Il facilite la préparation des repas tout en réveillant les saveurs de nos repas sans additif, sans cube.',
    price: 3000,
    weight: '120g',
    image: '/images/Image-Melange-epices.jpg',
    benefits: ['Équilibré', 'Polyvalent', 'Gain de temps'],
    uses: ['Barbecue', 'Poulet rôti', 'Légumes sautés'],
    category: 'Mixes'
  },
  {
    id: 'p7',
    name: 'Cannelle',
    shortDescription: 'Douce, parfumée et chaleureuse, notre cannelle 100 % naturelle.',
    longDescription: 'Douce, parfumée et chaleureuse, notre cannelle 100 % naturelle apporte une note sucrée et aromatique aux desserts, boissons, pains et plats salés. Un indispensable pour enrichir vos recettes avec élégance.',
    price: 2800,
    weight: '70g',
    image: '/images/Image-Cannelle.jpg',
    benefits: ['Régule la glycémie', 'Parfum réconfortant', 'Digestion'],
    uses: ['Pâtisseries', 'Boissons chaudes', 'Plats orientaux'],
    category: 'Spices'
  }
];

export const COMPANY_INFO = {
  name: "Goûts & Saveurs",
  email: "contact@goutsetsaveurs.com",
  phone: "+229 01 66 77 31 93",
  address: "Cotonou, Bénin",
  socials: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/2290166773193"
  }
};

// ============================================
// 🔑 FedaPay Configuration (Sandbox)
// ============================================
// La clé publique est lue depuis le fichier .env local
// Variable: VITE_FEDAPAY_PUBLIC_KEY
export const FEDAPAY_CONFIG = {
  publicKey: import.meta.env.VITE_FEDAPAY_PUBLIC_KEY || "",
  environment: "sandbox" as const,
  currency: "XOF",
};
