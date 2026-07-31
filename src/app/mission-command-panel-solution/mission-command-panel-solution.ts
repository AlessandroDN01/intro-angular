import { Component, inject } from '@angular/core';
import { MissionControlSolutionService } from '../mission-control-solution/mission-control-solution.service';

@Component({
  selector: 'app-mission-command-panel-solution',
  templateUrl: './mission-command-panel-solution.html',
  styleUrl: '../mission-command-panel/mission-command-panel.css',
})
export class MissionCommandPanelSolution {
  protected readonly missionControl = inject(MissionControlSolutionService);

  /*
   * VALID ALTERNATIVE: constructor injection asks Angular for the same service.
   * inject() is preferred here because it avoids a DI-only constructor and
   * composes naturally with field initializers. Constructor injection remains
   * useful when a test needs to instantiate the class directly.
   *
   * constructor(
   *   protected readonly missionControl: MissionControlSolutionService,
   * ) {}
   */

  protected sendNavigationCommand(): void {
    this.missionControl.sendCommand('navigation', 'Navigation route AX-19 confirmed.');
  }

  protected sendSystemsCheck(): void {
    this.missionControl.sendCommand('systems-check', 'Aurora systems check completed.');
  }

  protected sendLaunchClearance(): void {
    this.missionControl.sendCommand(
      'launch-clearance',
      'Mission Control granted launch clearance.',
    );
  }
}
