"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLoginView = void 0;
var ConsoleLoginView = /** @class */ (function () {
    function ConsoleLoginView() {
    }
    ConsoleLoginView.prototype.showSuccess = function () {
        console.log("Login successful!");
    };
    ConsoleLoginView.prototype.showError = function () {
        console.log("Login failed!");
    };
    return ConsoleLoginView;
}());
exports.ConsoleLoginView = ConsoleLoginView;
