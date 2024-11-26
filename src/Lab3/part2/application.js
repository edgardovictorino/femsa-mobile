"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this.productRepository = productRepository;
    }
    ProductService.prototype.addProduct = function (product) {
        this.productRepository.save(product);
    };
    ProductService.prototype.listProducts = function () {
        return this.productRepository.findAll();
    };
    return ProductService;
}());
exports.ProductService = ProductService;
