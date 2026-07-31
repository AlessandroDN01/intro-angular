import { AsyncPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormField, form, minLength, required } from '@angular/forms/signals';
import { Observable, catchError, finalize, of } from 'rxjs';

import { GalacticArchiveService } from '../galactic-http/galactic-archive.service';
import { MissionReportForm, SwapiPerson } from '../galactic-http/galactic-http.models';

@Component({
  selector: 'app-galactic-http-mission',
  imports: [AsyncPipe, FormField],
  templateUrl: './galactic-http-mission.html',
  styleUrl: './galactic-http-mission.css',
})
export class GalacticHttpMission {
  private readonly archive = inject(GalacticArchiveService);

  // WORKING EXAMPLE 1: httpResource eagerly performs a GET and reacts to this signal.
  protected readonly characterId = signal(1);
  protected readonly reactiveCharacter = httpResource<SwapiPerson>(
    () => `https://swapi.info/api/people/${this.characterId()}`,
  );

  // WORKING EXAMPLE 2: HttpClient returns a cold Observable. AsyncPipe subscribes in the template.
  protected readonly classicLoading = signal(true);
  protected readonly classicError = signal('');
  protected readonly classicCharacter$: Observable<SwapiPerson | undefined> = this.archive
    .getCharacter(3)
    .pipe(
      catchError(() => {
        this.classicError.set('The archive request failed. Check the data link.');
        return of(undefined);
      }),
      finalize(() => this.classicLoading.set(false)),
    );

  protected readonly reportModel = signal<MissionReportForm>({
    officerName: '',
    reportTitle: '',
    message: '',
    priority: 'routine',
  });

  protected readonly reportForm = form(this.reportModel, (report) => {
    // WORKING FORM EXAMPLE: one field is connected and validated exactly as in Level 6.
    required(report.officerName, { message: 'Enter the communications officer name.' });
    minLength(report.officerName, 3, { message: 'Use at least 3 characters.' });

    // TODO 2: Require reportTitle and give it a minimum length of 4.
    // TODO 5: Require message and give it a minimum length of 10.
  });

  protected readonly transmissionStatus = signal('No mission report transmitted.');

  protected selectCharacter(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.characterId.set(Number(select.value));
  }

  protected transmitReport(event: Event): void {
    event.preventDefault();

    // TODO 8: Make this method async and submit(reportForm).
    // Inside its action, build a typed NewMissionReport from reportModel.
    // Use the loaded character name when hasValue() is true, with a fallback
    // name so the POST lesson remains usable if the separate GET API is down.
    // Use firstValueFrom() to await the HttpClient Observable.
    this.transmissionStatus.set('POST transmitter still disconnected.');
  }
}
