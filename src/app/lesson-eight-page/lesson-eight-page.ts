import { Component } from '@angular/core';

import { GalacticHttpMissionSolution } from '../galactic-http-mission-solution/galactic-http-mission-solution';
import { GalacticHttpMission } from '../galactic-http-mission/galactic-http-mission';
import { LessonLayout } from '../lesson-layout/lesson-layout';

@Component({
  selector: 'app-lesson-eight-page',
  imports: [LessonLayout, GalacticHttpMission, GalacticHttpMissionSolution],
  template: `
    <app-lesson-layout
      [level]="8"
      title="Open the Galactic Data Link"
      intro="Compare reactive and classic GET requests, then validate and transmit a Signal Form report with POST."
      studentTitle="Repair the mission transmitter"
      solutionSummary="Reveal the completed HTTP mission"
      solutionHint="Compare when each GET begins, then trace the valid form model into the typed POST body."
    >
      <app-galactic-http-mission student />
      <app-galactic-http-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonEightPage {}
