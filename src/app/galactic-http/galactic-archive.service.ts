import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { SwapiPerson } from './galactic-http.models';

@Service()
export class GalacticArchiveService {
  private readonly http = inject(HttpClient);

  getCharacter(id: number): Observable<SwapiPerson> {
    return this.http.get<SwapiPerson>(`https://swapi.info/api/people/${id}`);
  }
}
