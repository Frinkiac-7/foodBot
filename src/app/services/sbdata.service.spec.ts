import { TestBed } from '@angular/core/testing';

import { SbdataService } from './sbdata.service';

describe('SbdataService', () => {
  let service: SbdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
