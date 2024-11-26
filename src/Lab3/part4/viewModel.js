"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogViewModel = void 0;
var ProductCatalogViewModel = /** @class */ (function () {
    function ProductCatalogViewModel() {
        this.products = [];
        this.listeners = [];
    }
    ProductCatalogViewModel.prototype.addProduct = function (product) {
        this.products.push(product);
        this.notifyListeners();
    };
    ProductCatalogViewModel.prototype.getProducts = function () {
        return this.products;
    };
    ProductCatalogViewModel.prototype.subscribe = function (listener) {
        this.listeners.push(listener);
    };
    ProductCatalogViewModel.prototype.notifyListeners = function () {
        this.listeners.forEach(function (listener) { return listener(); });
    };
    return ProductCatalogViewModel;
}());
exports.ProductCatalogViewModel = ProductCatalogViewModel;
