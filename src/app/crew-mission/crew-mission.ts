import { Component, signal } from '@angular/core';
import { CrewCard } from '../crew-card/crew-card';

interface CrewMember {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly available: boolean;
}

@Component({
  selector: 'app-crew-mission',
  imports: [CrewCard],
  templateUrl: './crew-mission.html',
  styleUrl: './crew-mission.css',
})
export class CrewMission {
  protected readonly crewMembers = signal<readonly CrewMember[]>([
    { id: 201, name: 'Ada Vega', role: 'Navigator', available: true },
    { id: 202, name: 'Kai Orion', role: 'Engineer', available: true },
    { id: 203, name: 'Nova Chen', role: 'Science Officer', available: false },
  ]);
  protected readonly assignedCrewIds = signal<readonly number[]>([]);
  protected readonly terminalMessage = signal('Select a crew profile to begin.');

  // WORKING EXAMPLE: the parent receives the custom profileViewed event.
  protected showProfile(memberName: string): void {
    this.terminalMessage.set(`Personnel file opened for ${memberName}.`);
  }

  protected assignCrewMember(memberId: number): void {
    // TODO 7: Add memberId to assignedCrewIds with update().
    // Avoid changing the existing array directly.
  }
}
