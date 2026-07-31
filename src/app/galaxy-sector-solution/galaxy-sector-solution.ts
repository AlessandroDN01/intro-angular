import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-galaxy-sector-solution',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './galaxy-sector-solution.html',
  styleUrl: '../route-demo/route-demo.css',
})
export class GalaxySectorSolution {
  readonly sectorId = input.required<string>();
}
