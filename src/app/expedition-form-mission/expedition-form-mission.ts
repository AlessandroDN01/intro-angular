import { Component, signal } from '@angular/core';
import { FormField, form, minLength, required } from '@angular/forms/signals';

interface ExpeditionRegistration {
  readonly callsign: string;
  readonly commanderEmail: string;
  readonly destination: string;
  readonly crewSize: number;
  readonly acceptsSafetyProtocol: boolean;
}

@Component({
  selector: 'app-expedition-form-mission',
  imports: [FormField],
  templateUrl: './expedition-form-mission.html',
  styleUrl: './expedition-form-mission.css',
})
export class ExpeditionFormMission {
  // The model contains the application data and gives every field its type.
  protected readonly registrationModel = signal<ExpeditionRegistration>({
    callsign: '',
    commanderEmail: '',
    destination: '',
    crewSize: 1,
    acceptsSafetyProtocol: false,
  });

  // WORKING EXAMPLE: form() creates a field tree and attaches schema rules.
  protected readonly registrationForm = form(this.registrationModel, (registration) => {
    required(registration.callsign, {
      message: 'Enter an expedition callsign.',
    });
    minLength(registration.callsign, 3, {
      message: 'The callsign must contain at least 3 characters.',
    });

    // TODO 2: Require commanderEmail and validate it with email().
    // TODO 4: Require destination.
    // TODO 6: Limit crewSize to a minimum of 2 and maximum of 8.
    // TODO 8: Require acceptsSafetyProtocol.
  });

  protected readonly registrationStatus = signal('Departure record not submitted.');

  protected registerExpedition(event: Event): void {
    event.preventDefault();

    // TODO 9: Import submit() and submit registrationForm.
    // In the action, read registrationModel and set a clearance message.
    this.registrationStatus.set('Submission channel still disconnected.');
  }
}
