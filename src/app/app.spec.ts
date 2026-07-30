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

  it('should render the computed signals mission and its solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-reactor-mission')).toBeTruthy();
    expect(compiled.querySelector('app-reactor-mission-solution')).toBeTruthy();
    expect(compiled.textContent).toContain('Stabilize the Reactor');
  });

  it('should update the working coolant computed signal', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const mission = fixture.nativeElement.querySelector('app-reactor-mission') as HTMLElement;
    const criticalButton = Array.from(mission.querySelectorAll('button')).find(
      (button) => button.textContent?.trim() === 'Critical',
    );

    criticalButton?.click();
    await fixture.whenStable();

    expect(mission.textContent).toContain('Coolant failure imminent');
  });

  it('should derive every reactor state and unlock safe ignition', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-reactor-mission-solution',
    ) as HTMLElement;
    const buttonWithText = (text: string) =>
      Array.from(solution.querySelectorAll('button')).find(
        (button) => button.textContent?.trim() === text,
      );
    const engageButton = solution.querySelector('.engage-button') as HTMLButtonElement;

    buttonWithText('Unstable preset')?.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Reactor unstable');
    expect(engageButton.disabled).toBe(true);

    buttonWithText('Critical preset')?.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Critical reactor failure');
    expect(engageButton.disabled).toBe(true);

    buttonWithText('Stable preset')?.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Reactor stable');
    expect(engageButton.disabled).toBe(false);

    engageButton.click();
    await fixture.whenStable();
    expect(solution.textContent).toContain('Signal Systems Engineer badge earned');
  });

  it('should render the services mission and its solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-mission-control-mission')).toBeTruthy();
    expect(compiled.querySelector('app-mission-control-mission-solution')).toBeTruthy();
    expect(compiled.textContent).toContain('Connect Mission Control');
  });

  it('should demonstrate an injected service controlling connection state', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const mission = fixture.nativeElement.querySelector(
      'app-mission-control-mission',
    ) as HTMLElement;
    const connectButton = Array.from(mission.querySelectorAll('button')).find(
      (button) => button.textContent?.trim() === 'Establish uplink',
    );

    connectButton?.click();
    await fixture.whenStable();

    expect(mission.querySelector('.connection')?.textContent).toContain('online');
  });

  it('should share service state between independent solution components', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-mission-control-mission-solution',
    ) as HTMLElement;
    const buttonWithText = (text: string) =>
      Array.from(solution.querySelectorAll('button')).find(
        (button) => button.textContent?.trim() === text,
      );

    buttonWithText('Establish uplink')?.click();
    await fixture.whenStable();
    buttonWithText('Confirm route')?.click();
    await fixture.whenStable();

    expect(solution.querySelector('.count')?.textContent).toContain('1 received');
    expect(solution.querySelector('.log-list')?.textContent).toContain(
      'Navigation route AX-19 confirmed',
    );

    buttonWithText('Clear transmission log')?.click();
    await fixture.whenStable();
    expect(solution.querySelector('.log-list')?.textContent).toContain('No commands received');

    buttonWithText('Request launch clearance')?.click();
    await fixture.whenStable();
    expect(solution.querySelector('.badge-message')?.textContent).toContain(
      'Dependency Navigator badge earned',
    );
  });

  it('should render the Signal Forms mission and its solution', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-expedition-form-mission')).toBeTruthy();
    expect(compiled.querySelector('app-expedition-form-mission-solution')).toBeTruthy();
    expect(compiled.textContent).toContain('Register the Expedition');
  });

  it('should validate the working callsign field after it is touched', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const mission = fixture.nativeElement.querySelector(
      'app-expedition-form-mission',
    ) as HTMLElement;
    const callsign = mission.querySelector('#student-callsign') as HTMLInputElement;

    callsign.value = 'A';
    callsign.dispatchEvent(new Event('input', { bubbles: true }));
    callsign.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(mission.querySelector('#student-callsign-errors')?.textContent).toContain(
      'at least 3 characters',
    );
    expect(callsign.getAttribute('aria-invalid')).toBe('true');
  });

  it('should submit a valid expedition and award the forms badge', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const solution = fixture.nativeElement.querySelector(
      'app-expedition-form-mission-solution',
    ) as HTMLElement;

    const setControlValue = (selector: string, value: string): void => {
      const control = solution.querySelector(selector) as HTMLInputElement | HTMLSelectElement;
      control.value = value;
      control.dispatchEvent(new Event('input', { bubbles: true }));
      control.dispatchEvent(new Event('change', { bubbles: true }));
    };

    setControlValue('#solution-callsign', 'Aurora Prime');
    setControlValue('#solution-email', 'ada@aurora.space');
    setControlValue('#solution-destination', 'europa');
    setControlValue('#solution-crew-size', '4');

    const protocol = solution.querySelector('#solution-protocol') as HTMLInputElement;
    protocol.checked = true;
    protocol.dispatchEvent(new Event('input', { bubbles: true }));
    protocol.dispatchEvent(new Event('change', { bubbles: true }));

    const formElement = solution.querySelector('form') as HTMLFormElement;
    formElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();

    expect(solution.querySelector('.submission-status')?.textContent).toContain(
      'Aurora Prime is cleared for europa',
    );
    expect(solution.querySelector('.badge-message')?.textContent).toContain(
      'Form Systems Specialist badge earned',
    );
  });
});
