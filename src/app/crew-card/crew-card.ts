import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.html',
  styleUrl: './crew-card.css',
})
export class CrewCard {
  // WORKING INPUTS: the parent must provide an ID and a name.
  readonly memberId = input.required<number>();
  readonly name = input.required<string>();

  // These optional inputs have safe defaults until the parent binds them.
  readonly role = input('Role channel disconnected');
  readonly available = input(false);

  // WORKING OUTPUT: the card can send a crew member's name to its parent.
  readonly profileViewed = output<string>();

  // TODO 4: This output will carry the selected crew member's ID.
  readonly assigned = output<number>();

  protected viewProfile(): void {
    this.profileViewed.emit(this.name());
  }

  protected requestAssignment(): void {
    // TODO 5: Emit memberId through the assigned output.
  }
}
