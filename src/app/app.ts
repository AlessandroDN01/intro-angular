import { Component } from '@angular/core';
import { ComponentMissionSolution } from './component-mission-solution/component-mission-solution';
import { ComponentMission } from './component-mission/component-mission';

@Component({
  selector: 'app-root',
  imports: [ComponentMission, ComponentMissionSolution],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
