import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lesson-layout',
  templateUrl: './lesson-layout.html',
  styleUrl: './lesson-layout.css',
})
export class LessonLayout {
  readonly level = input.required<number>();
  readonly title = input.required<string>();
  readonly intro = input.required<string>();
  readonly studentTitle = input.required<string>();
  readonly solutionSummary = input.required<string>();
  readonly solutionHint = input.required<string>();
}
