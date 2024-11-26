import { Product } from "./model";
import { ProductCatalogView } from "./view";
import { ProductCatalogViewModel } from "./viewModel";

const viewModel = new ProductCatalogViewModel();
const view = new ProductCatalogView(viewModel);

viewModel.addProduct(new Product("1", "Laptop", 1200));
viewModel.addProduct(new Product("2", "Phone", 800));