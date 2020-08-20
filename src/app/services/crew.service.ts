import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ICrewResult } from '../models/ICrewResult';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private http: HttpClient) {}

  private crewUrl: string = 'http://api.open-notify.org/astros.json';

  public loading$: Subject<boolean> = new Subject();

  public getCrew() {
    return this.http
      .get<ICrewResult>(this.crewUrl)
      .pipe(filter((crew) => crew.people['craft'] !== 'ISS'));
  }
}
