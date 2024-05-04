import { Injectable } from '@nestjs/common';
import { Shoppe } from './dtos/shoppe';

@Injectable()
export class FacadePatternService {
  buy(price: number): Promise<number> {
    const shoppe = new Shoppe();
    return shoppe.calc(price);
  }
}
