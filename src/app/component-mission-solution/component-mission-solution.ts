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
}
