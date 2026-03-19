import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Poisson Moulu',
    shortDescription: 'Concentré de saveur marine pour vos sauces.',
    longDescription: 'Notre poisson moulu est préparé à partir de poissons séchés de haute qualité, finement broyés pour préserver tout leur arôme. Idéal pour enrichir vos soupes, sauces et plats traditionnels sans effort.',
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
    shortDescription: 'La touche umami naturelle pour vos plats.',
    longDescription: 'Obtenue à partir de crevettes de rivière séchées, notre poudre de crevette apporte une profondeur de goût incomparable. Un incontournable de la cuisine locale.',
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
    shortDescription: 'L’or jaune aux vertus anti-inflammatoires.',
    longDescription: 'Notre curcuma pur est cultivé localement. Reconnu pour sa couleur vibrante et ses bienfaits pour la santé, il apporte une saveur terreuse et poivrée subtile.',
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
    shortDescription: 'Relevez vos plats avec finesse.',
    longDescription: 'Un piment aromatique sélectionné pour son piquant modéré et son parfum riche. Il est parfait pour être saupoudré directement sur les plats servis.',
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
    shortDescription: 'Chaleur intense pour les amateurs de piquant.',
    longDescription: 'Piment rouge séché et broyé, destiné à ceux qui aiment quand ça chauffe. Une petite quantité suffit pour transformer un plat.',
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
    shortDescription: 'Le secret du chef pour tout assaisonner.',
    longDescription: 'Notre mélange signature "Goûts & Saveurs". Une harmonie secrète de plus de 5 épices pour garantir la réussite de vos grillades et plats mijotés.',
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
    shortDescription: 'Douceur boisée pour sucré et salé.',
    longDescription: 'Écorce de cannelle moulue d’une finesse exceptionnelle. Son parfum envoûtant convient aussi bien aux desserts qu’aux plats mijotés type tajine.',
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
  phone: "+229 59 35 09 35",
  address: "Cotonou, Bénin",
  socials: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/22959350935"
  }
};
