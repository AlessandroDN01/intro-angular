import { Component } from '@angular/core';
import { LessonLayout } from '../lesson-layout/lesson-layout';
import { ReactorMissionSolution } from '../reactor-mission-solution/reactor-mission-solution';
import { ReactorMission } from '../reactor-mission/reactor-mission';

@Component({
  selector: 'app-lesson-four-page',
  imports: [LessonLayout, ReactorMission, ReactorMissionSolution],
  template: `
    <app-lesson-layout
      [level]="4"
      title="Stabilize the Reactor"
      intro="Separate source controls from calculated telemetry and let computed signals keep the system synchronized."
      studentTitle="Repair the reactor telemetry"
      solutionSummary="Reveal the stabilized reactor"
      solutionHint="Notice that calculated output, status, and readiness are never synchronized manually."
    >
      <app-reactor-mission student />
      <app-reactor-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonFourPage {}
