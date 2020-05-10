import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssLocationService {
  private locationUrl: string =
    'https://api.wheretheiss.at/v1/satellites/25544';

  public loading$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {}

  public getLocation() {
    return this.http.get(this.locationUrl);
  }

  public startLoading() {
    this.loading$.next(true);
  }

  public stopLoading() {
    this.loading$.next(false);
  }
}
