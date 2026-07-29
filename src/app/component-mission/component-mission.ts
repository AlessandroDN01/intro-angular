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
}
