import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing-solution-launcher',
  imports: [RouterLink],
  template: `
    <div class="solution-card">
      <p>
        The solved navigator has its own complete route tree so you can observe URLs, parameters,
        active links, eager versus lazy loading, and wildcard recovery.
      </p>
      <a routerLink="/routing-solution">Launch solved navigator</a>
    </div>
  `,
  styles: `
    .solution-card {
      padding: 1rem;
      border: 1px solid #33475d;
      border-radius: 0.7rem;
      background: #0b1622;
      color: #cbd5e1;
      line-height: 1.5;
    }

    a {
      display: block;
      padding: 0.8rem;
      border-radius: 0.5rem;
      background: #78e8ce;
      color: #082018;
      font-weight: 850;
      text-align: center;
      text-decoration: none;
    }

    a:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }
  `,
})
export class RoutingSolutionLauncher {}
