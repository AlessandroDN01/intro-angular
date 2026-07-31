import { Component } from '@angular/core';
import { ComponentMissionSolution } from '../component-mission-solution/component-mission-solution';
import { ComponentMission } from '../component-mission/component-mission';
import { LessonLayout } from '../lesson-layout/lesson-layout';

@Component({
  selector: 'app-lesson-one-page',
  imports: [LessonLayout, ComponentMission, ComponentMissionSolution],
  template: `
    <app-lesson-layout
      [level]="1"
      title="Awaken the Aurora"
      intro="Learn how a component's TypeScript data reaches its HTML template, then repair the ship's control panel."
      studentTitle="Repair the control panel"
      solutionSummary="Reveal the completed mission"
      solutionHint="Try every TODO first, then compare the HTML and TypeScript files."
    >
      <app-component-mission student />
      <app-component-mission-solution solution />
    </app-lesson-layout>
  `,
})
export class LessonOnePage {}
