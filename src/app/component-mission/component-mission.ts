import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-component-mission',
  imports: [NgOptimizedImage],
  templateUrl: './component-mission.html',
  styleUrl: './component-mission.css',
})
export class ComponentMission {
  // The TypeScript class stores the component's data.
  protected readonly shipName = signal('Aurora');
  protected readonly captainName = signal('Ada');
  protected readonly energy = signal(80);
  protected readonly shipImage = signal('/aurora-ship.svg');
  protected readonly enginesReady = signal(true);
  protected readonly diagnosticsStatus = signal('Diagnostics have not run yet.');
  protected readonly launchStatus = signal('Aurora is waiting for launch clearance.');

  // WORKING EXAMPLE: a template click calls this method and updates a signal.
  protected runDiagnostics(): void {
    this.diagnosticsStatus.set('Diagnostics complete. All engines are ready.');
  }

  protected launchMission(): void {
    // TODO 6: Update launchStatus with a mission-complete message.
  }
}
