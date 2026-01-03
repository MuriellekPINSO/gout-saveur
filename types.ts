export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  weight: string;
  image: string;
  benefits: string[];
  uses: string[];
  category: 'Spices' | 'Powders' | 'Mixes';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}