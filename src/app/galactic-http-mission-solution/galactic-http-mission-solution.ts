import { AsyncPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormField, form, minLength, required, submit } from '@angular/forms/signals';
import { Observable, catchError, finalize, firstValueFrom, of } from 'rxjs';

import { GalacticArchiveService } from '../galactic-http/galactic-archive.service';
import {
  MissionReportForm,
  NewMissionReport,
  SwapiPerson,
} from '../galactic-http/galactic-http.models';
import { MissionReportService } from '../galactic-http/mission-report.service';

@Component({
  selector: 'app-galactic-http-mission-solution',
  imports: [AsyncPipe, FormField],
  templateUrl: './galactic-http-mission-solution.html',
  styleUrl: '../galactic-http-mission/galactic-http-mission.css',
})
export class GalacticHttpMissionSolution {
  private readonly archive = inject(GalacticArchiveService);
  private readonly reports = inject(MissionReportService);

  protected readonly characterId = signal(1);
  protected readonly reactiveCharacter = httpResource<SwapiPerson>(
    () => `https://swapi.info/api/people/${this.characterId()}`,
  );

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
    required(report.officerName, { message: 'Enter the communications officer name.' });
    minLength(report.officerName, 3, { message: 'Use at least 3 characters.' });
    required(report.reportTitle, { message: 'Enter a report title.' });
    minLength(report.reportTitle, 4, { message: 'Use at least 4 characters.' });
    required(report.message, { message: 'Enter a transmission message.' });
    minLength(report.message, 10, { message: 'Use at least 10 characters.' });
  });

  protected readonly transmissionStatus = signal('No mission report transmitted.');
  protected readonly transmissionComplete = signal(false);

  protected selectCharacter(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.characterId.set(Number(select.value));
    this.transmissionComplete.set(false);
  }

  protected async transmitReport(event: Event): Promise<void> {
    event.preventDefault();
    this.transmissionComplete.set(false);

    // Keep this independent POST exercise usable even if the external GET API is unavailable.
    const characterName = this.reactiveCharacter.hasValue()
      ? this.reactiveCharacter.value().name
      : `Unverified archive record ${this.characterId()}`;

    await submit(this.reportForm, {
      action: async () => {
        const formValue = this.reportModel();
        const report: NewMissionReport = {
          ...formValue,
          characterName,
          userId: this.characterId(),
        };

        this.transmissionStatus.set('Transmitting report to JSONPlaceholder…');

        try {
          const savedReport = await firstValueFrom(this.reports.sendReport(report));
          this.transmissionStatus.set(
            `Report ${savedReport.id} received for ${savedReport.characterName}.`,
          );
          this.transmissionComplete.set(true);
        } catch {
          this.transmissionStatus.set('Transmission failed. Your form data is safe—try again.');
        }

        return undefined;
      },
    });
  }
}
