import { Component } from '@angular/core';
import { ExpeditionFormMissionSolution } from '../expedition-form-mission-solution/expedition-form-mission-solution';
import { ExpeditionFormMission } from '../expedition-form-mission/expedition-form-mission';
import { LessonLayout } from '../lesson-layout/lesson-layout';

@Component({
  selector: 'app-lesson-six-page',
  imports: [LessonLayout, ExpeditionFormMission, ExpeditionFormMissionSolution],
  template: `
    <app-lesson-layout
      [level]="6"
      title="Register the Expedition"
      intro="Connect a typed model to controls, validate with a Signal Forms schema, and submit the departure record."
      studentTitle="Repair the registration terminal"
      solutionSummary="Reveal the completed registration"
      solutionHint="Trace each control through its field-tree node to the typed model."
    >
      <app-expedition-form-mission student />
      <app-expedition-form-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonSixPage {}
