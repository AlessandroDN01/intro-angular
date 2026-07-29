import { Component, signal } from '@angular/core';
import { CrewCardSolution } from '../crew-card-solution/crew-card-solution';

interface CrewMember {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly available: boolean;
}

@Component({
  selector: 'app-crew-mission-solution',
  imports: [CrewCardSolution],
  templateUrl: './crew-mission-solution.html',
  styleUrl: '../crew-mission/crew-mission.css',
})
export class CrewMissionSolution {
  protected readonly crewMembers = signal<readonly CrewMember[]>([
    { id: 201, name: 'Ada Vega', role: 'Navigator', available: true },
    { id: 202, name: 'Kai Orion', role: 'Engineer', available: true },
    { id: 203, name: 'Nova Chen', role: 'Science Officer', available: false },
  ]);
  protected readonly assignedCrewIds = signal<readonly number[]>([]);
  protected readonly terminalMessage = signal('Select a crew profile to begin.');

  protected showProfile(memberName: string): void {
    this.terminalMessage.set(`Personnel file opened for ${memberName}.`);
  }

  protected assignCrewMember(memberId: number): void {
    this.assignedCrewIds.update((currentIds) =>
      currentIds.includes(memberId) ? currentIds : [...currentIds, memberId],
    );
    this.terminalMessage.set(
      `Crew member ${memberId} assigned. Component Communicator badge progress updated!`,
    );
  }
}
