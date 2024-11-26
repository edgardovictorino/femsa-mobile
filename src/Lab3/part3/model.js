"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [{ username: "user", password: "pass" }];
    }
    UserService.prototype.authenticate = function (username, password) {
        return this.users.some(function (user) { return user.username === username && user.password === password; });
    };
    return UserService;
}());
exports.UserService = UserService;
