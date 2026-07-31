import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lost-in-space-solution',
  imports: [RouterLink],
  template: `
    <section class="route-screen">
      <p class="eyebrow">Solved wildcard route</p>
      <h1 data-route-heading tabindex="-1">Unknown coordinates</h1>
      <p>The final <code>**</code> route safely caught this unmatched URL.</p>
      <a class="return-link" routerLink="/routing-solution">Recover route map</a>
    </section>
  `,
  styleUrl: '../route-demo/route-demo.css',
})
export class LostInSpaceSolution {}
