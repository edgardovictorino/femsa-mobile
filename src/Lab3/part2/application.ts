import { Product, ProductRepository } from './domain';

class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  addProduct(product: Product): void {
    this.productRepository.save(product);
  }

  listProducts(): Product[] {
    return this.productRepository.findAll();
  }
}

export default ProductService;