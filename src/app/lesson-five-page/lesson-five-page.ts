import { Component } from '@angular/core';
import { LessonLayout } from '../lesson-layout/lesson-layout';
import { MissionControlMissionSolution } from '../mission-control-mission-solution/mission-control-mission-solution';
import { MissionControlMission } from '../mission-control-mission/mission-control-mission';

@Component({
  selector: 'app-lesson-five-page',
  imports: [LessonLayout, MissionControlMission, MissionControlMissionSolution],
  template: `
    <app-lesson-layout
      [level]="5"
      title="Connect Mission Control"
      intro="Share reactive mission state between independent components through a focused injected service."
      studentTitle="Repair the communication array"
      solutionSummary="Reveal the connected Mission Control"
      solutionHint="Follow a command from the panel into the service and out to the separate log component."
    >
      <app-mission-control-mission student />
      <app-mission-control-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonFivePage {}
