import { Component, inject } from '@angular/core';
import { MissionCommandPanelSolution } from '../mission-command-panel-solution/mission-command-panel-solution';
import { MissionControlSolutionService } from '../mission-control-solution/mission-control-solution.service';
import { MissionLogSolution } from '../mission-log-solution/mission-log-solution';

@Component({
  selector: 'app-mission-control-mission-solution',
  imports: [MissionCommandPanelSolution, MissionLogSolution],
  templateUrl: './mission-control-mission-solution.html',
  styleUrl: '../mission-control-mission/mission-control-mission.css',
})
export class MissionControlMissionSolution {
  protected readonly missionControl = inject(MissionControlSolutionService);
}
