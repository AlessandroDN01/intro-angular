import { Component, signal } from '@angular/core';

type AlertLevel = 'safe' | 'warning' | 'danger';
type FlightMode = 'manual' | 'autopilot' | 'docking';
type ScannerStatus = 'online' | 'calibrating' | 'offline';
type ThreatLevel = 'low' | 'medium' | 'high';

interface Asteroid {
  readonly id: number;
  readonly name: string;
  readonly distance: number;
  readonly threat: ThreatLevel;
}

const INITIAL_ASTEROIDS: readonly Asteroid[] = [
  { id: 101, name: 'Kronos Fragment', distance: 840, threat: 'low' },
  { id: 102, name: 'Red Titan', distance: 320, threat: 'high' },
  { id: 103, name: 'Silent Rock', distance: 560, threat: 'medium' },
];

@Component({
  selector: 'app-control-flow-mission',
  templateUrl: './control-flow-mission.html',
  styleUrl: './control-flow-mission.css',
})
export class ControlFlowMission {
  protected readonly scannerStatus = signal<ScannerStatus>('online');
  protected readonly shieldEnergy = signal(64);
  protected readonly flightMode = signal<FlightMode>('autopilot');
  protected readonly alertLevel = signal<AlertLevel>('warning');
  protected readonly asteroids = signal<readonly Asteroid[]>(INITIAL_ASTEROIDS);

  protected cycleScannerStatus(): void {
    const nextStatus: Record<ScannerStatus, ScannerStatus> = {
      online: 'calibrating',
      calibrating: 'offline',
      offline: 'online',
    };

    this.scannerStatus.update((currentStatus) => nextStatus[currentStatus]);
  }

  protected setShieldEnergy(energy: number): void {
    this.shieldEnergy.set(energy);
  }

  protected cycleAlert(): void {
    const nextAlert: Record<AlertLevel, AlertLevel> = {
      safe: 'warning',
      warning: 'danger',
      danger: 'safe',
    };

    this.alertLevel.update((currentAlert) => nextAlert[currentAlert]);
  }

  protected clearScan(): void {
    this.asteroids.set([]);
  }

  protected restoreScan(): void {
    this.asteroids.set(INITIAL_ASTEROIDS);
  }
}
