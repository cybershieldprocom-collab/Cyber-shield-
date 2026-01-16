
export enum Category {
  STUDENT = 'Students',
  CREATOR = 'Creators',
  HACKER = 'Ethical Hackers',
  GAMING = 'Gaming',
  ULTRABOOK = 'Ultrabooks'
}

export interface LaptopSpec {
  cpu: string;
  ram: string;
  storage: string;
  gpu?: string;
  display: string;
}

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: Category[];
  specs: LaptopSpec;
  pros: string[];
  link: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
