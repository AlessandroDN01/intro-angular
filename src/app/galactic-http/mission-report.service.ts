import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { NewMissionReport, SavedMissionReport } from './galactic-http.models';

@Service()
export class MissionReportService {
  private readonly http = inject(HttpClient);

  sendReport(report: NewMissionReport): Observable<SavedMissionReport> {
    return this.http.post<SavedMissionReport>('https://jsonplaceholder.typicode.com/posts', report);
  }
}
