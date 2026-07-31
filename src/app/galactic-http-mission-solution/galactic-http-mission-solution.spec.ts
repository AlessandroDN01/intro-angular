import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticHttpMissionSolution } from './galactic-http-mission-solution';

describe('GalacticHttpMissionSolution', () => {
  let fixture: ComponentFixture<GalacticHttpMissionSolution>;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalacticHttpMissionSolution],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(GalacticHttpMissionSolution);
    fixture.detectChanges();
  });

  afterEach(() => http.verify());

  function flushWorkingGetExamples(): void {
    http.expectOne('https://swapi.info/api/people/1').flush({
      name: 'Luke Skywalker',
      height: '172',
      birth_year: '19BBY',
      eye_color: 'blue',
    });
    http.expectOne('https://swapi.info/api/people/3').flush({
      name: 'R2-D2',
      height: '96',
      birth_year: '33BBY',
      eye_color: 'red',
    });
    fixture.detectChanges();
  }

  function setControlValue(selector: string, value: string): void {
    const control = fixture.nativeElement.querySelector(selector) as
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    control.value = value;
    control.dispatchEvent(new Event('input', { bubbles: true }));
    control.dispatchEvent(new Event('change', { bubbles: true }));
  }

  it('demonstrates reactive and classic GET requests', async () => {
    flushWorkingGetExamples();
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Luke Skywalker');
    expect(fixture.nativeElement.textContent).toContain('AsyncPipe subscribed and received R2-D2');

    setControlValue('#solution-character', '4');
    fixture.detectChanges();

    http.expectOne('https://swapi.info/api/people/4').flush({
      name: 'Darth Vader',
      height: '202',
      birth_year: '41.9BBY',
      eye_color: 'yellow',
    });
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Darth Vader');
  });

  it('posts a valid Signal Form report and awards the badge', async () => {
    flushWorkingGetExamples();
    await fixture.whenStable();

    setControlValue('#solution-officer', 'Ada Vega');
    setControlValue('#solution-report-title', 'Tatooine contact');
    setControlValue('#solution-message', 'Archive contact confirmed and recorded.');
    setControlValue('#solution-priority', 'important');

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    const request = http.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      officerName: 'Ada Vega',
      reportTitle: 'Tatooine contact',
      message: 'Archive contact confirmed and recorded.',
      priority: 'important',
      characterName: 'Luke Skywalker',
      userId: 1,
    });
    request.flush({ ...request.request.body, id: 101 });

    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Report 101 received for Luke Skywalker');
    expect(fixture.nativeElement.textContent).toContain(
      'Galactic Communications Officer badge earned',
    );
  });
});
