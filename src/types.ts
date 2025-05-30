export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}