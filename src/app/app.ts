import { Component } from '@angular/core';
import { ComponentMissionSolution } from './component-mission-solution/component-mission-solution';
import { ComponentMission } from './component-mission/component-mission';
import { ControlFlowMissionSolution } from './control-flow-mission-solution/control-flow-mission-solution';
import { ControlFlowMission } from './control-flow-mission/control-flow-mission';
import { CrewMissionSolution } from './crew-mission-solution/crew-mission-solution';
import { CrewMission } from './crew-mission/crew-mission';
import { ExpeditionFormMissionSolution } from './expedition-form-mission-solution/expedition-form-mission-solution';
import { ExpeditionFormMission } from './expedition-form-mission/expedition-form-mission';
import { MissionControlMissionSolution } from './mission-control-mission-solution/mission-control-mission-solution';
import { MissionControlMission } from './mission-control-mission/mission-control-mission';
import { ReactorMissionSolution } from './reactor-mission-solution/reactor-mission-solution';
import { ReactorMission } from './reactor-mission/reactor-mission';

@Component({
  selector: 'app-root',
  imports: [
    ComponentMission,
    ComponentMissionSolution,
    ControlFlowMission,
    ControlFlowMissionSolution,
    CrewMission,
    CrewMissionSolution,
    ReactorMission,
    ReactorMissionSolution,
    MissionControlMission,
    MissionControlMissionSolution,
    ExpeditionFormMission,
    ExpeditionFormMissionSolution,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
