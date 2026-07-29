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
});
