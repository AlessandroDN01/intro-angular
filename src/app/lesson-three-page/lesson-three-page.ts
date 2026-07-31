import { Component } from '@angular/core';
import { CrewMissionSolution } from '../crew-mission-solution/crew-mission-solution';
import { CrewMission } from '../crew-mission/crew-mission';
import { LessonLayout } from '../lesson-layout/lesson-layout';

@Component({
  selector: 'app-lesson-three-page',
  imports: [LessonLayout, CrewMission, CrewMissionSolution],
  template: `
    <app-lesson-layout
      [level]="3"
      title="Assemble the Flight Crew"
      intro="Build a reusable crew card, send data into it with signal inputs, and report actions with outputs."
      studentTitle="Reconnect the crew terminal"
      solutionSummary="Reveal the completed crew terminal"
      solutionHint="Trace data down through inputs and assignment events back up through outputs."
    >
      <app-crew-mission student />
      <app-crew-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonThreePage {}
