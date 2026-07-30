import { Service, computed, signal } from '@angular/core';

export type SolutionConnectionStatus = 'online' | 'offline';
export type SolutionCommandType = 'navigation' | 'systems-check' | 'launch-clearance';

export interface SolutionMissionLogEntry {
  readonly id: number;
  readonly type: SolutionCommandType;
  readonly message: string;
}

@Service()
export class MissionControlSolutionService {
  private readonly connectionState = signal<SolutionConnectionStatus>('offline');
  private readonly logEntriesState = signal<readonly SolutionMissionLogEntry[]>([]);
  private nextEntryId = 1;

  readonly connectionStatus = this.connectionState.asReadonly();
  readonly logEntries = this.logEntriesState.asReadonly();
  readonly commandCount = computed(() => this.logEntriesState().length);
  readonly missionReady = computed(() =>
    this.logEntriesState().some((entry) => entry.type === 'launch-clearance'),
  );

  connect(): void {
    this.connectionState.set('online');
  }

  disconnect(): void {
    this.connectionState.set('offline');
  }

  sendCommand(type: SolutionCommandType, message: string): void {
    const entry: SolutionMissionLogEntry = {
      id: this.nextEntryId,
      type,
      message,
    };

    this.logEntriesState.update((entries) => [...entries, entry]);
    this.nextEntryId++;
  }

  clearLog(): void {
    this.logEntriesState.set([]);
  }
}
