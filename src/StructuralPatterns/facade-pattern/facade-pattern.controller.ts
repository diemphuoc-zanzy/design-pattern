import { Body, Controller, Get } from '@nestjs/common';
import { FacadePatternService } from './facade-pattern.service';

@Controller('facade-pattern')
export class FacadePatternController {
  constructor(private facadePatternService: FacadePatternService) {}

  @Get('order')
  async order(@Body() price: number): Promise<number> {
    return this.facadePatternService.buy(price);
  }
}
