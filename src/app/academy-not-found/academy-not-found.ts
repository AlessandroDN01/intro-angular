import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academy-not-found',
  imports: [RouterLink],
  template: `
    <section class="route-screen">
      <p class="eyebrow">Angular Academy</p>
      <h1 data-route-heading tabindex="-1">Mission route not found</h1>
      <p>These coordinates are not part of the academy route map.</p>
      <a class="return-link" routerLink="/academy">Return to academy</a>
    </section>
  `,
  styleUrl: '../route-demo/route-demo.css',
})
export class AcademyNotFound {}
