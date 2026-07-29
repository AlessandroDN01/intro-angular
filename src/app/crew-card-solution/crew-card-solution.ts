import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-crew-card-solution',
  templateUrl: './crew-card-solution.html',
  styleUrl: '../crew-card/crew-card.css',
})
export class CrewCardSolution {
  readonly memberId = input.required<number>();
  readonly name = input.required<string>();
  readonly role = input.required<string>();
  readonly available = input(false);

  readonly profileViewed = output<string>();
  readonly assigned = output<number>();

  protected viewProfile(): void {
    this.profileViewed.emit(this.name());
  }

  protected requestAssignment(): void {
    this.assigned.emit(this.memberId());
  }
}
