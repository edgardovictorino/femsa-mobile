class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;

  constructor(id: string, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

interface ProductRepository {
  save(product: Product): void;
  findAll(): Product[];
}

export { Product, ProductRepository };
