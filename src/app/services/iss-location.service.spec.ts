import { TestBed } from '@angular/core/testing';

import { IssLocationService } from './iss-location.service';

describe('IssLocationService', () => {
  let service: IssLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
