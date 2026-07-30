import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-log',
  templateUrl: './mission-log.html',
  styleUrl: './mission-log.css',
})
export class MissionLog {
  // TODO 1: Import inject and MissionControlService.
  // Inject the same service used by MissionCommandPanel.
  /*
   * VALID ALTERNATIVE after importing MissionControlService:
   * constructor injection receives the same singleton. We prefer inject() for
   * concise field-based dependencies, while constructors can simplify tests
   * that create a class directly with new.
   *
   * constructor(
   *   protected readonly missionControl: MissionControlService,
   * ) {}
   */
}
