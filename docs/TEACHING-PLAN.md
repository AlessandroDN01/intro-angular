# Angular Academy Teaching Plan

## Purpose

This project is an educational Angular 22 application for students learning
modern Angular. It is both a demonstration and a hands-on coding challenge.
Lessons form a gamified science-fiction adventure aboard the spaceship Aurora.

The application should remain approachable to beginners while using current
Angular and TypeScript practices. `AGENTS.md` contains the mandatory technical
and accessibility conventions.

## Teaching philosophy

Every lesson follows this sequence:

1. Introduce one focused Angular idea through the Aurora story.
2. Show a complete, working example of the new syntax.
3. Ask students to repair similar incomplete functionality marked with TODOs.
4. Keep the student code valid and compilable before the TODOs are solved.
5. Provide controls that let students observe every relevant state or branch.
6. Hide a complete sister solution behind a native `<details>` disclosure.
7. Celebrate completion with a level-specific badge.

Students should learn by recognizing a working pattern, applying it, and seeing
the game world react. Avoid quizzes unless the project direction explicitly
changes. The code itself is the challenge.

Each new lesson should:

- Introduce as few new concepts as possible.
- Reuse earlier concepts so knowledge accumulates naturally.
- Explain unfamiliar syntax with concise comments close to the code.
- Give story meaning to technical requirements such as `track`, stable IDs, or
  component communication.
- Keep components small and focused.
- Preserve WCAG AA behavior, meaningful labels, keyboard focus, and live status
  announcements.
- Include behavioral tests for important interactions and branches.
- Pass strict TypeScript checks, unit tests, formatting, and a production build.

## Student and solution convention

Each level has a student mission and a solved sister mission.

The student version:

- Contains at least one correct example of the new concept.
- Contains numbered TODOs that apply the demonstrated pattern.
- Uses placeholders or disconnected bindings instead of invalid Angular syntax.
- Must compile before students complete it.
- Should make the broken game system visually understandable.

The solution version:

- Solves every student TODO.
- Uses the same data and visual design, making comparison easy.
- Demonstrates the intended modern Angular implementation.
- Lets students interact with all outcomes.
- Shows a clear success message and awards the lesson badge.

Do not accidentally solve or remove TODOs in student components when changing
shared styling or surrounding application code.

## Story and visual language

The learner is an Angular Academy cadet repairing and operating the Aurora.
Lessons should continue this story unless a future design decision explicitly
changes it.

Current visual language:

- Dark spaceship interfaces
- Teal system-success accents
- Yellow training and warning accents
- Red danger states
- System panels, scanners, terminals, and status readouts
- Level headings and earned badges

Maintain sufficient color contrast and never rely on color alone to communicate
state.

## Completed levels

### Level 1: Awaken the Aurora

Badge: **Component Engineer**

Student files:

- `src/app/component-mission/component-mission.ts`
- `src/app/component-mission/component-mission.html`
- `src/app/component-mission/component-mission.css`

Solution files:

- `src/app/component-mission-solution/component-mission-solution.ts`
- `src/app/component-mission-solution/component-mission-solution.html`

Concepts:

- Component TypeScript, HTML template, and CSS responsibilities
- Signals as component data
- Interpolation
- Property binding
- Attribute binding
- `NgOptimizedImage`
- Click-event binding
- Updating writable signals with `set()`
- Accessible status announcements with `aria-live`

The working click example runs ship diagnostics. Students repair the ship
readouts, launch bindings, click handler, and launch-status update.

### Level 2: Navigate the Asteroid Field

Badge: **Control Flow Navigator**

Student files:

- `src/app/control-flow-mission/control-flow-mission.ts`
- `src/app/control-flow-mission/control-flow-mission.html`
- `src/app/control-flow-mission/control-flow-mission.css`

Solution files:

- `src/app/control-flow-mission-solution/control-flow-mission-solution.ts`
- `src/app/control-flow-mission-solution/control-flow-mission-solution.html`

Concepts:

- Complete `@if`, `@else if`, and `@else` control flow
- `@switch`, `@case`, and `@default`
- `@for`
- Stable tracking with `track asteroid.id`
- Context variables `$index` and `$count`
- `@empty`
- Signal updates that expose every rendered state

The scanner is the complete three-branch working example. Flight mode is the
complete switch example. Students repair shield branches, the threat decoder,
the asteroid loop, tracking, metadata, and empty state.

When Angular syntax such as `@if` must appear as visible text in an Angular
template, escape the at sign as `&#64;` so the template parser does not treat the
label as a control-flow block.

### Level 3: Assemble the Flight Crew

Badge: **Component Communicator**

Student parent:

- `src/app/crew-mission/crew-mission.ts`
- `src/app/crew-mission/crew-mission.html`
- `src/app/crew-mission/crew-mission.css`

Student child:

- `src/app/crew-card/crew-card.ts`
- `src/app/crew-card/crew-card.html`
- `src/app/crew-card/crew-card.css`

Solved parent:

- `src/app/crew-mission-solution/crew-mission-solution.ts`
- `src/app/crew-mission-solution/crew-mission-solution.html`

Solved child:

- `src/app/crew-card-solution/crew-card-solution.ts`
- `src/app/crew-card-solution/crew-card-solution.html`

Concepts:

- Parent and child component responsibilities
- Reusable child components rendered with `@for`
- Required signal inputs with `input.required()`
- Optional signal inputs with defaults using `input()`
- Custom outputs with `output()`
- Emitting data with `.emit()`
- Receiving emitted data through `$event`
- Updating immutable parent signal state

The complete `profileViewed` channel is the working output example. Students
bind role and availability inputs, connect the assignment click, emit the crew
ID, listen for the event in the parent, and update the assignment signal.

### Level 4: Stabilize the Reactor

Badge: **Signal Systems Engineer**

Student files:

- `src/app/reactor-mission/reactor-mission.ts`
- `src/app/reactor-mission/reactor-mission.html`
- `src/app/reactor-mission/reactor-mission.css`

Solution files:

- `src/app/reactor-mission-solution/reactor-mission-solution.ts`
- `src/app/reactor-mission-solution/reactor-mission-solution.html`

Concepts:

- Writable signals as source state
- `computed()` signals as derived state
- Automatic dependency tracking and recalculation
- Pure calculations derived from multiple signals
- Numeric, textual, and boolean computed values
- Using computed values in interpolation, attributes, and property bindings
- Avoiding duplicated state and manual synchronization

The coolant monitor is the complete computed-signal example. Students derive
reactor output, status, and readiness, then bind readiness to the ignition
control. The solution provides stable, unstable, and critical presets so every
derived state can be observed.

### Level 5: Connect Mission Control

Badge: **Dependency Navigator**

Student service and components:

- `src/app/mission-control/mission-control.service.ts`
- `src/app/mission-control-mission/mission-control-mission.ts`
- `src/app/mission-command-panel/mission-command-panel.ts`
- `src/app/mission-log/mission-log.ts`

Solution service and components:

- `src/app/mission-control-solution/mission-control-solution.service.ts`
- `src/app/mission-control-mission-solution/mission-control-mission-solution.ts`
- `src/app/mission-command-panel-solution/mission-command-panel-solution.ts`
- `src/app/mission-log-solution/mission-log-solution.ts`

Concepts:

- Focused Angular services
- Angular 22's auto-provided `@Service()` decorator
- Dependency injection with `inject()`
- Sharing one service instance across independent components
- Private writable signals exposed with `asReadonly()`
- Meaningful service methods that protect state transitions
- Immutable signal updates inside a service
- Computed state owned by a service
- Distinguishing local component state from shared service state

The command panel is the complete injection and connection-state example.
Students inject the same service into the receiving log, repair immutable
command storage, render shared entries, and connect log clearing. The separate
solution service prevents the student and reference simulations from sharing
state with each other.

### Level 6: Register the Expedition

Badge: **Form Systems Specialist**

Student files:

- `src/app/expedition-form-mission/expedition-form-mission.ts`
- `src/app/expedition-form-mission/expedition-form-mission.html`
- `src/app/expedition-form-mission/expedition-form-mission.css`

Solution files:

- `src/app/expedition-form-mission-solution/expedition-form-mission-solution.ts`
- `src/app/expedition-form-mission-solution/expedition-form-mission-solution.html`

Concepts:

- Angular 22 Signal Forms
- Typed form models stored in signals
- Field trees created with `form()`
- Control binding with `[formField]`
- Schema-based validation
- `required()`, `email()`, `minLength()`, `min()`, and `max()`
- Reactive field state such as `touched()`, `invalid()`, and `errors()`
- Accessible labels, descriptions, error messages, and invalid state
- Validated submission with `submit()`
- Distinguishing application data, form state, and HTML controls

The callsign is the complete binding, schema, and accessible-error example.
Students connect and validate commander email, destination, crew size, and
safety acceptance, then repair validated submission. Tests interact with the
real DOM controls to confirm data reaches the typed model.

### Level 7: Chart the Galaxy

Badge: **Route Commander**

Student lesson and routing-lab files:

- `src/app/lesson-seven-page/lesson-seven-page.ts`
- `src/app/routing-mission/routing-mission.ts`
- `src/app/routing-lab-home/routing-lab-home.ts`
- `src/app/student-galaxy-sector/student-galaxy-sector.ts`
- `src/app/student-lost-in-space/student-lost-in-space.ts`
- Student TODO routes in `src/app/app.routes.ts`

Solved routing files:

- `src/app/routing-solution-launcher/routing-solution-launcher.ts`
- `src/app/routing-solution-home/routing-solution-home.ts`
- `src/app/galaxy-sector-solution/galaxy-sector-solution.ts`
- `src/app/lost-in-space-solution/lost-in-space-solution.ts`
- Solved routes under the `routing-solution` path in `src/app/app.routes.ts`

Concepts:

- Route configuration
- `RouterOutlet`
- `RouterLink` and `RouterLinkActive`
- Accessible current-page state with `ariaCurrentWhenActive`
- Eager route components with a normal import and `component`
- Lazy standalone components with `loadComponent`
- Downloading component code versus creating a component instance
- Parameterized routes
- Route parameters bound to required signal inputs
- `withComponentInputBinding()`
- Default redirects and wildcard recovery routes
- Route-aware focus management
- URLs, browser history, refresh, and bookmark behavior

The real application was converted from one long page into a routed academy.
The root is now an application shell, the academy dashboard is lazy-loaded, and
Levels 1–7 each have their own lazy page chunk. Existing lesson pages retain the
student mission and hidden solution through the reusable `LessonLayout`.

Because navigation itself is the Level 7 behavior, its solution disclosure
links to a separate working `routing-solution` route tree. The incomplete
student `routing-lab` and complete solution coexist under different URL
prefixes, avoiding multiple-router complexity. The home component in each tree
is eagerly imported as a direct comparison with its lazy sector components.

## Current application structure

`src/app/app.html` is the accessible application shell and primary
`RouterOutlet`. `src/app/app.routes.ts` lazy-loads the academy dashboard, lesson
pages, sector simulators, and recovery pages. The two routing-home examples are
eager so students can compare `component` with `loadComponent`. Each Level 1–6
and Level 8 route uses `LessonLayout` to present the student mission beside a
hidden solved component. Level 7 launches its interactive solved route from the
disclosure.

The main navigation routes are:

- `/academy`
- `/lesson/1` through `/lesson/8`
- `/routing-lab` for the student routing exercise
- `/routing-solution` for the working routing reference

The custom Aurora spaceship asset is:

- `public/aurora-ship.svg`

Current validation baseline:

- 27 unit tests pass.
- Strict TypeScript compilation passes.
- The Angular production build passes.
- The project uses NVM Node `24.18.0`; load NVM and run `nvm use 24` when a shell
  has retained an older Node version.

Useful verification commands:

```sh
source "$NVM_DIR/nvm.sh"
nvm use 24
npm test
npm run build
```

## Recommended roadmap

The roadmap is a direction, not a rigid commitment. Discuss the next lesson with
the teacher before implementing it.

### Level 8: Open the Galactic Data Link

Badge: **Galactic Communications Officer**

Student files:

- `src/app/galactic-http-mission/galactic-http-mission.ts`
- `src/app/galactic-http-mission/galactic-http-mission.html`
- `src/app/galactic-http-mission/galactic-http-mission.css`

Solution files:

- `src/app/galactic-http-mission-solution/galactic-http-mission-solution.ts`
- `src/app/galactic-http-mission-solution/galactic-http-mission-solution.html`

Shared HTTP files:

- `src/app/galactic-http/galactic-http.models.ts`
- `src/app/galactic-http/galactic-archive.service.ts`
- `src/app/galactic-http/mission-report.service.ts`

Concepts:

- Configuring Angular's HTTP infrastructure with `provideHttpClient()`
- Reactive GET requests with `httpResource`
- Signal-dependent URLs, eager loading, cancellation, retry, and resource state
- Guarding resource values with `hasValue()`
- Classic GET requests with `HttpClient`
- Cold Observables and template subscription with `AsyncPipe`
- Focused API services and typed response models
- Signal Forms validation reused from Level 6
- User-triggered POST requests with `HttpClient.post()`
- Converting a one-response Observable with `firstValueFrom()`
- Separate form-validity and HTTP-submission state
- Loading, success, and error feedback with accessible live regions
- HTTP tests with `HttpTestingController`

The two complete scanners retrieve SWAPI-compatible character data from
`swapi.info` using the reactive and
classic Angular HTTP styles so students can compare them directly. Students
then repair a Signal Form transmitter and send its typed report to
JSONPlaceholder. The service simulates creation but does not persist submitted
reports. The POST remains usable when the independent character API is down.
Automated tests intercept every request and never depend on either external API
being available.

## Resuming in a new session

At the beginning of a future session:

1. Read `AGENTS.md`.
2. Read this document completely.
3. Inspect `git status` and preserve existing user changes.
4. Inspect the latest lesson and its solution before proposing the next level.
5. Run the existing tests before and after material changes.

A useful opening request is:

> Read `AGENTS.md` and `docs/TEACHING-PLAN.md`, inspect the existing Angular
> Academy levels, and continue from the documented teaching roadmap.

The repository is the durable source of context. Do not rely on access to a
previous chat session.
