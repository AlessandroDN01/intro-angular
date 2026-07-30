import { Component, inject } from '@angular/core';
import { MissionControlSolutionService } from '../mission-control-solution/mission-control-solution.service';

@Component({
  selector: 'app-mission-log-solution',
  templateUrl: './mission-log-solution.html',
  styleUrl: '../mission-log/mission-log.css',
})
export class MissionLogSolution {
  protected readonly missionControl = inject(MissionControlSolutionService);

  /*
   * VALID ALTERNATIVE: constructor injection receives the same singleton.
   * We prefer inject() for concise field-based dependencies; constructor
   * injection can make direct class construction in isolated tests easier.
   *
   * constructor(
   *   protected readonly missionControl: MissionControlSolutionService,
   * ) {}
   */
}
