import { Product, ProductRepository } from './domain';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor() {}

  save(product: Product): void {
    this.products = [...this.products, product];
  }

  findAll(): Product[] {
    return [...this.products];
  }
}