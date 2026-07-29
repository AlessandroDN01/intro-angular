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

## Current application structure

`src/app/app.html` presents all levels sequentially. Each student mission appears
beside a hidden solved component. `src/app/app.ts` imports the lesson components.
`src/app/app.spec.ts` contains rendering and behavioral tests across the levels.

The custom Aurora spaceship asset is:

- `public/aurora-ship.svg`

At the time this document was created:

- 11 unit tests pass.
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

### Level 4: Stabilize the Reactor

Primary concept: derived state with `computed()`.

Possible mission:

- Store reactor inputs as writable signals.
- Derive total output, stability, readiness, and warning text with `computed()`.
- Demonstrate that derived values should not be manually synchronized.
- Let students repair computed reactor efficiency and launch-readiness values.

Possible badge: **Signal Systems Engineer**

### Level 5: Connect Mission Control

Primary concepts: services and dependency injection.

Possible mission:

- Move mission-log responsibility into a focused root service.
- Inject it with `inject()`.
- Share mission state between two components.
- Keep components concerned with presentation and interaction.

Possible badge: **Dependency Navigator**

### Level 6: Register the Expedition

Primary concept: Angular Signal Forms.

Possible mission:

- Build a crew-expedition registration form.
- Add type-safe fields and schema validation.
- Show accessible validation messages and submission state.

Possible badge: **Form Systems Specialist**

### Level 7: Chart the Galaxy

Primary concepts: routing and lazy-loaded feature routes.

Possible mission:

- Turn academy levels into navigable sectors.
- Lazy-load a feature route.
- Add an accessible navigation system and active state.

Possible badge: **Route Commander**

### Level 8: Receive Deep-Space Data

Primary concepts: HTTP, asynchronous state, loading, success, empty, and error
states.

Possible mission:

- Retrieve mission data from an API.
- Display loading and error states.
- Reuse native control flow for all asynchronous outcomes.

Possible badge: **Deep-Space Operator**

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
