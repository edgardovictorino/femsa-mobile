"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPresenter = void 0;
var LoginPresenter = /** @class */ (function () {
    function LoginPresenter(userService, view) {
        this.userService = userService;
        this.view = view;
    }
    LoginPresenter.prototype.login = function (username, password) {
        if (this.userService.authenticate(username, password)) {
            this.view.showSuccess();
        }
        else {
            this.view.showError();
        }
    };
    return LoginPresenter;
}());
exports.LoginPresenter = LoginPresenter;
