"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var presenter_1 = require("./presenter");
var view_1 = require("./view");
var userService = new model_1.UserService();
var loginView = new view_1.ConsoleLoginView();
var presenter = new presenter_1.LoginPresenter(userService, loginView);
presenter.login("user", "pass");
