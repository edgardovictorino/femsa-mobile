"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogView = void 0;
var ProductCatalogView = /** @class */ (function () {
    function ProductCatalogView(viewModel) {
        var _this = this;
        this.viewModel = viewModel;
        this.viewModel.subscribe(function () { return _this.render(); });
    }
    ProductCatalogView.prototype.render = function () {
        console.log("Product Catalog:", this.viewModel.getProducts());
    };
    return ProductCatalogView;
}());
exports.ProductCatalogView = ProductCatalogView;
