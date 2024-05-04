import { IsNotEmpty } from 'class-validator';
import { Figure } from './figure';

export class Subject {
  @IsNotEmpty()
  location: number;

  @IsNotEmpty()
  figureList: Figure[];

  addFigure(figure: Figure) {
    this.figureList.push(figure);
  }

  notify(): string[] {
    return this.figureList.map((figure) => figure.updateStatus(this.location));
  }
}
