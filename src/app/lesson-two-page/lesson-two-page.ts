import { Component } from '@angular/core';
import { ControlFlowMissionSolution } from '../control-flow-mission-solution/control-flow-mission-solution';
import { ControlFlowMission } from '../control-flow-mission/control-flow-mission';
import { LessonLayout } from '../lesson-layout/lesson-layout';

@Component({
  selector: 'app-lesson-two-page',
  imports: [LessonLayout, ControlFlowMission, ControlFlowMissionSolution],
  template: `
    <app-lesson-layout
      [level]="2"
      title="Navigate the Asteroid Field"
      intro="Use Angular's native control flow to decide what the navigation console displays and render every scanner contact."
      studentTitle="Restore the navigation systems"
      solutionSummary="Reveal the completed navigation console"
      solutionHint="Test safe, warning, and danger states before opening the solution."
    >
      <app-control-flow-mission student />
      <app-control-flow-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonTwoPage {}
