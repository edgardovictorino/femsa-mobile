import { Product } from './model';

export class ProductCatalogViewModel {
  private products: Product[] = [];
  private listeners: (() => void)[] = [];

  constructor() {}

  addProduct(product: Product): void {
    this.products = [...this.products, product];
    this.notifyListeners();
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  subscribe(listener: () => void): void {
    this.listeners = [...this.listeners, listener];
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}
