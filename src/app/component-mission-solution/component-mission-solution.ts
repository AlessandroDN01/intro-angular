import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-component-mission-solution',
  imports: [NgOptimizedImage],
  templateUrl: './component-mission-solution.html',
  styleUrl: '../component-mission/component-mission.css',
})
export class ComponentMissionSolution {
  protected readonly shipName = signal('Aurora');
  protected readonly captainName = signal('Ada');
  protected readonly energy = signal(80);
  protected readonly shipImage = signal('/aurora-ship.svg');
  protected readonly enginesReady = signal(true);
  protected readonly diagnosticsStatus = signal('Diagnostics have not run yet.');
  protected readonly launchStatus = signal('Aurora is waiting for launch clearance.');

  protected runDiagnostics(): void {
    this.diagnosticsStatus.set('Diagnostics complete. All engines are ready.');
  }

  protected launchMission(): void {
    this.launchStatus.set('Launch successful! Level 1 complete — Component Engineer badge earned!');
  }
}
