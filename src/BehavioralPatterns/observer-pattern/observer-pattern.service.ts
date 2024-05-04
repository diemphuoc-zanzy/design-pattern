import { Injectable } from '@nestjs/common';
import { Subject } from './dtos/subject';

@Injectable()
export class ObserverPatternService {
  async getActionMessageHavePattern(subject: Subject): Promise<string[]> {
    return subject.notify();
  }
}
