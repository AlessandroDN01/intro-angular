import { Component } from '@angular/core';
import { LessonLayout } from '../lesson-layout/lesson-layout';
import { RoutingMission } from '../routing-mission/routing-mission';
import { RoutingSolutionLauncher } from '../routing-solution-launcher/routing-solution-launcher';

@Component({
  selector: 'app-lesson-seven-page',
  imports: [LessonLayout, RoutingMission, RoutingSolutionLauncher],
  template: `
    <app-lesson-layout
      [level]="7"
      title="Chart the Galaxy"
      intro="Connect application state to URLs, lazy-load mission sectors, decode route parameters, and recover from unknown coordinates."
      studentTitle="Repair the navigation computer"
      solutionSummary="Reveal the routing solution"
      solutionHint="The interactive solution opens as a real route because navigation itself is the behavior being demonstrated."
    >
      <app-routing-mission student />
      <app-routing-solution-launcher solution />
    </app-lesson-layout>
  `,
})
export class LessonSevenPage {}
