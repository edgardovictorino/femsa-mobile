var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getItems = function () {
        return this.items;
    };
    return ShoppingCart;
}());
var SimpleTotalCalculator = /** @class */ (function () {
    function SimpleTotalCalculator() {
    }
    SimpleTotalCalculator.prototype.calculate = function (items) {
        return items.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
    };
    return SimpleTotalCalculator;
}());
var ConsoleCheckoutProcessor = /** @class */ (function () {
    function ConsoleCheckoutProcessor() {
    }
    ConsoleCheckoutProcessor.prototype.process = function (total) {
        console.log("Processing payment for total:", total);
    };
    return ConsoleCheckoutProcessor;
}());
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(cart, totalCalculator, checkoutProcessor) {
        this.cart = cart;
        this.totalCalculator = totalCalculator;
        this.checkoutProcessor = checkoutProcessor;
    }
    ShoppingCartService.prototype.checkout = function () {
        var total = this.totalCalculator.calculate(this.cart.getItems());
        this.checkoutProcessor.process(total);
    };
    return ShoppingCartService;
}());
