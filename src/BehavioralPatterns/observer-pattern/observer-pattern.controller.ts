import { Body, Controller, Get } from '@nestjs/common';
import { ObserverPatternService } from './observer-pattern.service';
import { Subject } from './dtos/subject';

@Controller('observer-pattern')
export class ObserverPatternController {
  constructor(private observerPatternService: ObserverPatternService) {}

  @Get('action-message/have-pattern')
  async getActionMessageHavePattern(
    @Body() subject: Subject,
  ): Promise<string[]> {
    return this.observerPatternService.getActionMessageHavePattern(subject);
  }
}
