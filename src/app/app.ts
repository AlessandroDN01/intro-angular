import { Component } from '@angular/core';
import { ComponentMissionSolution } from './component-mission-solution/component-mission-solution';
import { ComponentMission } from './component-mission/component-mission';
import { ControlFlowMissionSolution } from './control-flow-mission-solution/control-flow-mission-solution';
import { ControlFlowMission } from './control-flow-mission/control-flow-mission';

@Component({
  selector: 'app-root',
  imports: [
    ComponentMission,
    ComponentMissionSolution,
    ControlFlowMission,
    ControlFlowMissionSolution,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
