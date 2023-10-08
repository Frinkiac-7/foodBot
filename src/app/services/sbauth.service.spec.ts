import { TestBed } from '@angular/core/testing';

import { SbauthService } from './sbauth.service';

describe('SbauthService', () => {
  let service: SbauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
