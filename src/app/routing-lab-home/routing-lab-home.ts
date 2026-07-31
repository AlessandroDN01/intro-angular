import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing-lab-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './routing-lab-home.html',
  styleUrl: '../route-demo/route-demo.css',
})
export class RoutingLabHome {}
