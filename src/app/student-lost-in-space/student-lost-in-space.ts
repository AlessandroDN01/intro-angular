import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-lost-in-space',
  imports: [RouterLink],
  template: `
    <section class="route-screen">
      <p class="eyebrow">Student wildcard route</p>
      <h1 data-route-heading tabindex="-1">Unknown coordinates</h1>
      <p>The navigation computer caught an unmatched student route.</p>
      <a class="return-link" routerLink="/routing-lab">Recover route map</a>
    </section>
  `,
  styleUrl: '../route-demo/route-demo.css',
})
export class StudentLostInSpace {}
