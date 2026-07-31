import { Component, signal } from '@angular/core';
import {
  FormField,
  email,
  form,
  max,
  min,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';

interface ExpeditionRegistration {
  readonly callsign: string;
  readonly commanderEmail: string;
  readonly destination: string;
  readonly crewSize: number;
  readonly acceptsSafetyProtocol: boolean;
}

@Component({
  selector: 'app-expedition-form-mission-solution',
  imports: [FormField],
  templateUrl: './expedition-form-mission-solution.html',
  styleUrl: '../expedition-form-mission/expedition-form-mission.css',
})
export class ExpeditionFormMissionSolution {
  protected readonly registrationModel = signal<ExpeditionRegistration>({
    callsign: '',
    commanderEmail: '',
    destination: '',
    crewSize: 1,
    acceptsSafetyProtocol: false,
  });

  protected readonly registrationForm = form(this.registrationModel, (registration) => {
    required(registration.callsign, {
      message: 'Enter an expedition callsign.',
    });
    minLength(registration.callsign, 3, {
      message: 'The callsign must contain at least 3 characters.',
    });
    required(registration.commanderEmail, {
      message: 'Commander email is required.',
    });
    email(registration.commanderEmail, {
      message: 'Enter a valid communication address.',
    });
    required(registration.destination, {
      message: 'Select an expedition destination.',
    });
    min(registration.crewSize, 2, {
      message: 'At least 2 crew members are required.',
    });
    max(registration.crewSize, 8, {
      message: 'The Aurora supports at most 8 crew members.',
    });
    required(registration.acceptsSafetyProtocol, {
      message: 'Safety protocol acceptance is required.',
    });
  });

  protected readonly registrationStatus = signal('Departure record not submitted.');
  protected readonly registrationComplete = signal(false);

  protected async registerExpedition(event: Event): Promise<void> {
    event.preventDefault();

    await submit(this.registrationForm, {
      action: async () => {
        const registration = this.registrationModel();

        this.registrationStatus.set(
          `${registration.callsign} is cleared for ${registration.destination}!`,
        );
        this.registrationComplete.set(true);
      },
    });
  }
}
