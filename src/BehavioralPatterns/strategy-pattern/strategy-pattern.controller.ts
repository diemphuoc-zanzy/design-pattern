import { Body, Controller, Get } from '@nestjs/common';
import { StrategyPatternService } from './strategy-pattern.service';
import { Price } from '../dtos/price';

@Controller('strategy-pattern')
export class StrategyPatternController {
  constructor(private strategyPatternService: StrategyPatternService) {}

  @Get('/get-price/none-pattern')
  async getPriceNonePattern(@Body() price: Price): Promise<number> {
    return await this.strategyPatternService.getPriceNonePattern(price);
  }

  @Get('/get-price/have-pattern')
  async getPriceHavePattern(@Body() price: Price): Promise<number> {
    return await this.strategyPatternService.getPriceHavePattern(price);
  }
}
