import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-galaxy-sector',
  imports: [RouterLink],
  template: `
    <section class="route-screen">
      <p class="eyebrow">Student sector route</p>
      <h1 data-route-heading tabindex="-1">Sector: {{ sectorId() }}</h1>
      <p>
        The router decoded <code>{{ sectorId() }}</code> and bound it to a required signal input.
      </p>
      <p class="badge">Route Commander badge earned!</p>
      <a class="return-link" routerLink="/routing-lab">Return to route map</a>
    </section>
  `,
  styleUrl: '../route-demo/route-demo.css',
})
export class StudentGalaxySector {
  readonly sectorId = input.required<string>();
}
