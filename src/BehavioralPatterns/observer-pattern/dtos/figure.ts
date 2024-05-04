import { IsNotEmpty } from 'class-validator';

export class Figure {
  constructor(namePick: string) {
    this.namePick = namePick;
  }

  @IsNotEmpty()
  namePick: string;

  public updateStatus(location: number): string {
    return this.goToHelp(location);
  }

  public goToHelp(location: number): string {
    return `${this.namePick}:::PING:::${location}`;
  }
}
