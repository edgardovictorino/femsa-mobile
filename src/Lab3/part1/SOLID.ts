interface ITotalCalculator {
  calculate(items: ICartItem[]): number;
}

interface ICheckoutProcessor {
  process(total: number): void;
}

class ShoppingCart {
  private items: ICartItem[] = [];

  addItem(item: ICartItem): void {
    this.items.push(item);
  }

  getItems(): ICartItem[] {
    return this.items;
  }
}

class SimpleTotalCalculator implements ITotalCalculator {
  calculate(items: ICartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

class ConsoleCheckoutProcessor implements ICheckoutProcessor {
  process(total: number): void {
    console.log("Processing payment for total:", total);
  }
}

class ShoppingCartService {
  constructor(
    private cart: ShoppingCart,
    private totalCalculator: ITotalCalculator,
    private checkoutProcessor: ICheckoutProcessor
  ) {}

  checkout(): void {
    const total = this.totalCalculator.calculate(this.cart.getItems());
    this.checkoutProcessor.process(total);
  }
}

interface ICartItem {
  name: string;
  price: number;
  quantity: number;
}