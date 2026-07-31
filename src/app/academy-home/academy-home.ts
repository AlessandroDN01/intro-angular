import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academy-home',
  imports: [RouterLink],
  templateUrl: './academy-home.html',
  styleUrl: './academy-home.css',
})
export class AcademyHome {
  protected readonly lessons = [
    { level: 1, title: 'Awaken the Aurora', topic: 'Components and bindings' },
    { level: 2, title: 'Navigate the Asteroid Field', topic: 'Native control flow' },
    { level: 3, title: 'Assemble the Flight Crew', topic: 'Inputs and outputs' },
    { level: 4, title: 'Stabilize the Reactor', topic: 'Computed signals' },
    { level: 5, title: 'Connect Mission Control', topic: 'Services and injection' },
    { level: 6, title: 'Register the Expedition', topic: 'Signal Forms' },
    { level: 7, title: 'Chart the Galaxy', topic: 'Routing and lazy loading' },
    {
      level: 8,
      title: 'Open the Galactic Data Link',
      topic: 'HTTP resources, HttpClient, and POST',
    },
  ] as const;
}
