import { Discount } from './discount';
import { Shipping } from './shipping';
import { Fees } from './fees';

export class Shoppe {
  private discount: Discount;
  private shipping: Shipping;
  private fees: Fees;
  private price;

  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    this.price = this.discount.calc(price);
    console.log(`discount:::`, price);
    this.price = this.fees.calc(price);
    console.log(`fees:::`, price);
    this.price += this.shipping.calc();
    console.log(`shipping:::`, price);

    return price;
  }
}
