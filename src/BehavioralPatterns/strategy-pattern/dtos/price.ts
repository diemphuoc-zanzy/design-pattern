import { IsNotEmpty } from 'class-validator';

export class Price {
  @IsNotEmpty()
  originalPrice: number;

  typePromotion: string = 'default';
}
