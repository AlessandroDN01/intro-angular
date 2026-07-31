import { Service, computed, signal } from '@angular/core';

export type ConnectionStatus = 'online' | 'offline';
export type CommandType = 'navigation' | 'systems-check' | 'launch-clearance';

export interface MissionLogEntry {
  readonly id: number;
  readonly type: CommandType;
  readonly message: string;
}

@Service()
export class MissionControlService {
  // Writable state stays private so components cannot bypass service methods.
  private readonly connectionState = signal<ConnectionStatus>('offline');
  private readonly logEntriesState = signal<readonly MissionLogEntry[]>([]);
  private nextEntryId = 1;

  // Components receive readonly views of the shared state.
  readonly connectionStatus = this.connectionState.asReadonly();
  readonly logEntries = this.logEntriesState.asReadonly();
  readonly commandCount = computed(() => this.logEntriesState().length);
  readonly missionReady = computed(() =>
    this.logEntriesState().some((entry) => entry.type === 'launch-clearance'),
  );

  // WORKING EXAMPLE: a service method controls its private writable signal.
  connect(): void {
    this.connectionState.set('online');
  }

  disconnect(): void {
    this.connectionState.set('offline');
  }

  sendCommand(type: CommandType, message: string): void {
    // TODO 2: Create an entry with nextEntryId, type, and message.
    // Add it immutably with logEntriesState.update(), then increment the ID.
  }

  clearLog(): void {
    // TODO 5: Reset logEntriesState to an empty array.
  }
}
