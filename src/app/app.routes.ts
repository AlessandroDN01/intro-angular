import { Routes } from '@angular/router';

import { RoutingLabHome } from './routing-lab-home/routing-lab-home';
import { RoutingSolutionHome } from './routing-solution-home/routing-solution-home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'academy',
  },
  {
    path: 'academy',
    title: 'Angular Academy',
    loadComponent: () =>
      import('./academy-home/academy-home').then((component) => component.AcademyHome),
  },
  {
    path: 'lesson/1',
    title: 'Level 1 · Awaken the Aurora',
    loadComponent: () =>
      import('./lesson-one-page/lesson-one-page').then((component) => component.LessonOnePage),
  },
  {
    path: 'lesson/2',
    title: 'Level 2 · Navigate the Asteroid Field',
    loadComponent: () =>
      import('./lesson-two-page/lesson-two-page').then((component) => component.LessonTwoPage),
  },
  {
    path: 'lesson/3',
    title: 'Level 3 · Assemble the Flight Crew',
    loadComponent: () =>
      import('./lesson-three-page/lesson-three-page').then(
        (component) => component.LessonThreePage,
      ),
  },
  {
    path: 'lesson/4',
    title: 'Level 4 · Stabilize the Reactor',
    loadComponent: () =>
      import('./lesson-four-page/lesson-four-page').then((component) => component.LessonFourPage),
  },
  {
    path: 'lesson/5',
    title: 'Level 5 · Connect Mission Control',
    loadComponent: () =>
      import('./lesson-five-page/lesson-five-page').then((component) => component.LessonFivePage),
  },
  {
    path: 'lesson/6',
    title: 'Level 6 · Register the Expedition',
    loadComponent: () =>
      import('./lesson-six-page/lesson-six-page').then((component) => component.LessonSixPage),
  },
  {
    path: 'lesson/7',
    title: 'Level 7 · Chart the Galaxy',
    loadComponent: () =>
      import('./lesson-seven-page/lesson-seven-page').then(
        (component) => component.LessonSevenPage,
      ),
  },
  {
    path: 'lesson/8',
    title: 'Level 8 · Open the Galactic Data Link',
    loadComponent: () =>
      import('./lesson-eight-page/lesson-eight-page').then(
        (component) => component.LessonEightPage,
      ),
  },
  {
    path: 'routing-lab',
    children: [
      {
        path: '',
        pathMatch: 'full',
        // EAGER EXAMPLE: a normal import makes this code part of the initial bundle.
        // Angular still creates the component only when /routing-lab is active.
        component: RoutingLabHome,
      },

      /*
       * TODO 3: Add the student parameter route:
       * path: 'sector/:sectorId'
       * Lazy-load StudentGalaxySector from student-galaxy-sector.ts.
       */

      /*
       * TODO 4: Add a final ** child route that lazy-loads
       * StudentLostInSpace from student-lost-in-space.ts.
       */
    ],
  },
  {
    path: 'routing-solution',
    children: [
      {
        path: '',
        pathMatch: 'full',
        // EAGER EXAMPLE: compare component with the lazy loadComponent route below.
        component: RoutingSolutionHome,
      },
      {
        path: 'sector/:sectorId',
        loadComponent: () =>
          import('./galaxy-sector-solution/galaxy-sector-solution').then(
            (component) => component.GalaxySectorSolution,
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./lost-in-space-solution/lost-in-space-solution').then(
            (component) => component.LostInSpaceSolution,
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./academy-not-found/academy-not-found').then(
        (component) => component.AcademyNotFound,
      ),
  },
];
