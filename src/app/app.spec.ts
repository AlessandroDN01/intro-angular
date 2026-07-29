import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the first lesson', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Awaken the Aurora');
    expect(compiled.querySelector('app-component-mission')).toBeTruthy();
    expect(compiled.querySelector('app-component-mission-solution')).toBeTruthy();
  });

  it('should update diagnostics after the example button is clicked', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const mission = fixture.nativeElement.querySelector('app-component-mission') as HTMLElement;
    const diagnosticsButton = mission.querySelector('.secondary-button') as HTMLButtonElement;

    diagnosticsButton.click();
    await fixture.whenStable();

    expect(mission.querySelector('.system-message')?.textContent).toContain('Diagnostics complete');
  });

  it('should celebrate a successful launch in the solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const solution = fixture.nativeElement.querySelector(
      'app-component-mission-solution',
    ) as HTMLElement;
    const launchButton = solution.querySelector(
      'button:not(.secondary-button)',
    ) as HTMLButtonElement;

    launchButton.click();
    await fixture.whenStable();

    expect(solution.querySelector('.launch-message')?.textContent).toContain(
      'Component Engineer badge earned',
    );
  });

  it('should render the control flow mission and its solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-control-flow-mission')).toBeTruthy();
    expect(compiled.querySelector('app-control-flow-mission-solution')).toBeTruthy();
    expect(compiled.textContent).toContain('Navigate the Asteroid Field');
  });

  it('should render every shield conditional branch in the solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-control-flow-mission-solution',
    ) as HTMLElement;
    const shieldControls = solution.querySelector(
      '[aria-label="Shield simulation controls"]',
    ) as HTMLElement;
    const [stableButton, weakenedButton, criticalButton] = Array.from(
      shieldControls.querySelectorAll('button'),
    );

    stableButton.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Shields stable');

    weakenedButton.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Shields weakened');

    criticalButton.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Critical shield failure');
  });

  it('should render every scanner conditional branch in the working example', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-control-flow-mission-solution',
    ) as HTMLElement;
    const cycleScannerButton = Array.from(solution.querySelectorAll('button')).find(
      (button) => button.textContent?.trim() === 'Cycle scanner',
    );

    expect(solution.textContent).toContain('Scanner online');

    cycleScannerButton?.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Scanner calibrating');

    cycleScannerButton?.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Scanner offline');
  });

  it('should render the empty scanner state in the solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-control-flow-mission-solution',
    ) as HTMLElement;
    const clearButton = Array.from(solution.querySelectorAll('button')).find(
      (button) => button.textContent?.trim() === 'Clear',
    );

    clearButton?.click();
    await fixture.whenStable();

    expect(solution.textContent).toContain('Flight path clear — no asteroids detected.');
  });

  it('should render the crew communication mission and its solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-crew-mission')).toBeTruthy();
    expect(compiled.querySelector('app-crew-mission-solution')).toBeTruthy();
    expect(compiled.textContent).toContain('Assemble the Flight Crew');
  });

  it('should send the working profile output to the parent', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const mission = fixture.nativeElement.querySelector('app-crew-mission') as HTMLElement;
    const viewProfileButton = mission.querySelector('app-crew-card button') as HTMLButtonElement;

    viewProfileButton.click();
    await fixture.whenStable();

    expect(mission.querySelector('.terminal-message')?.textContent).toContain(
      'Personnel file opened for Ada Vega',
    );
  });

  it('should assemble the crew through child outputs in the solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-crew-mission-solution',
    ) as HTMLElement;
    const assignmentButtons = Array.from(
      solution.querySelectorAll<HTMLButtonElement>('.assign-button:not(:disabled)'),
    );

    assignmentButtons[0].click();
    assignmentButtons[1].click();
    await fixture.whenStable();

    expect(solution.querySelector('.crew-count')?.textContent).toContain('2 assigned');
    expect(solution.querySelector('.badge-message')?.textContent).toContain(
      'Component Communicator badge earned',
    );
  });
});
