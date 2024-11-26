"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryProductRepository = void 0;
var InMemoryProductRepository = /** @class */ (function () {
    function InMemoryProductRepository() {
        this.products = [];
    }
    InMemoryProductRepository.prototype.save = function (product) {
        this.products.push(product);
    };
    InMemoryProductRepository.prototype.findAll = function () {
        return this.products;
    };
    return InMemoryProductRepository;
}());
exports.InMemoryProductRepository = InMemoryProductRepository;
