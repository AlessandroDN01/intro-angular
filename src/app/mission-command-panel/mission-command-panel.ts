import { Component, inject } from '@angular/core';
import { MissionControlService } from '../mission-control/mission-control.service';

@Component({
  selector: 'app-mission-command-panel',
  templateUrl: './mission-command-panel.html',
  styleUrl: './mission-command-panel.css',
})
export class MissionCommandPanel {
  // WORKING EXAMPLE: ask Angular's injector for the shared service instance.
  protected readonly missionControl = inject(MissionControlService);

  /*
   * VALID ALTERNATIVE: constructor injection receives the same service instance.
   * We prefer inject() in new Angular code because it avoids a DI-only
   * constructor and keeps the dependency beside fields that use it. Constructor
   * injection can be convenient when tests instantiate the class directly.
   *
   * constructor(
   *   protected readonly missionControl: MissionControlService,
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
