import { ProductCatalogViewModel } from './viewModel';

export class ProductCatalogView {
  private viewModel: ProductCatalogViewModel;

  constructor(viewModel: ProductCatalogViewModel) {
    this.viewModel = viewModel;
    this.viewModel.subscribe(this.render.bind(this));
  }

  render(): void {
    console.log(`Product Catalog: ${this.viewModel.getProducts()}`);
  }
}