export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  isActive: boolean;
  isPromo?: boolean;
}

export const products: Product[] = [
  { id: 1, name: "Pão Francês Pacote", price: 19.9, stock: 10, category: "Padaria", isActive: true },
  { id: 2, name: "Pão de Queijo", price: 14.5, stock: 20, category: "Padaria", isActive: true },
  { id: 3, name: "Croissant", price: 7.9, stock: 15, category: "Padaria", isActive: true },
  { id: 4, name: "Sonho com Creme", price: 6.5, stock: 12, category: "Padaria", isActive: true },
  { id: 5, name: "Bolo de Cenoura com Chocolate", price: 22.0, stock: 8, category: "Padaria", isActive: true },
  { id: 6, name: "Café Torrado e Moído 500g", price: 18.9, stock: 30, category: "Mercearia", isActive: true },
  { id: 7, name: "Feijão Carioca 1kg", price: 8.9, stock: 50, category: "Grãos", isActive: true },
  { id: 8, name: "Feijão Preto 1kg", price: 9.5, stock: 40, category: "Grãos", isActive: true },
  { id: 9, name: "Arroz Branco 5kg", price: 27.9, stock: 25, category: "Grãos", isActive: true },
  { id: 10, name: "Cuscuz Nordestino 500g", price: 5.5, stock: 60, category: "Grãos", isActive: true },
  { id: 11, name: "Farinha de Mandioca 1kg", price: 6.9, stock: 35, category: "Grãos", isActive: true },
  { id: 12, name: "Açúcar Refinado 1kg", price: 4.9, stock: 50, category: "Mercearia", isActive: true },
  { id: 13, name: "Manteiga 200g", price: 12.9, stock: 18, category: "Padaria", isActive: true },
  { id: 14, name: "Leite Integral 1L", price: 6.2, stock: 40, category: "Mercearia", isActive: true },
  { id: 15, name: "Requeijão Cremoso 200g", price: 9.8, stock: 22, category: "Padaria", isActive: true },
  { id: 16, name: "Presunto Fatiado 200g", price: 8.5, stock: 30, category: "Frios", isActive: true },
  { id: 17, name: "Queijo Mussarela 200g", price: 10.5, stock: 28, category: "Frios", isActive: true },
  { id: 18, name: "Biscoito Cream Cracker 400g", price: 7.9, stock: 40, category: "Mercearia", isActive: true },
  { id: 19, name: "Biscoito Maria 400g", price: 6.9, stock: 30, category: "Mercearia", isActive: true },
  { id: 20, name: "Achocolatado em Pó 400g", price: 11.5, stock: 20, category: "Mercearia", isActive: true },
  { id: 21, name: "Fermento Biológico 10g", price: 2.9, stock: 60, category: "Padaria", isActive: true },
  { id: 22, name: "Leite em Pó 400g", price: 17.9, stock: 25, category: "Mercearia", isActive: true },
  { id: 23, name: "Óleo de Soja 900ml", price: 7.4, stock: 45, category: "Mercearia", isActive: true },
  { id: 24, name: "Margarina 500g", price: 8.9, stock: 30, category: "Padaria", isActive: true },
  { id: 25, name: "Pão de Forma", price: 10.9, stock: 15, category: "Padaria", isActive: true },
  { id: 26, name: "Rosquinha de Coco 300g", price: 8.5, stock: 20, category: "Padaria", isActive: true },
  { id: 27, name: "Pão Integral", price: 11.9, stock: 14, category: "Padaria", isActive: true },
  { id: 28, name: "Queijo Coalho 500g", price: 24.9, stock: 12, category: "Frios", isActive: true },
  { id: 29, name: "Cereal Matinal 250g", price: 13.5, stock: 16, category: "Mercearia", isActive: true },
  { id: 30, name: "Tapioca 500g", price: 7.2, stock: 35, category: "Grãos", isActive: true },
];
