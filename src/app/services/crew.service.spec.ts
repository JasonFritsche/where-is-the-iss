import { TestBed } from '@angular/core/testing';

import { CrewService } from './crew.service';

describe('CrewService', () => {
  let service: CrewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
