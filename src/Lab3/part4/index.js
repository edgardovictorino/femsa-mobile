"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var view_1 = require("./view");
var viewModel_1 = require("./viewModel");
var viewModel = new viewModel_1.ProductCatalogViewModel();
var view = new view_1.ProductCatalogView(viewModel);
viewModel.addProduct(new model_1.Product("1", "Laptop", 1200));
viewModel.addProduct(new model_1.Product("2", "Phone", 800));
