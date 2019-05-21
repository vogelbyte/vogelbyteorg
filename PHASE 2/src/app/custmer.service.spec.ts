import { TestBed } from '@angular/core/testing';

import { CustmerService } from './custmer.service';

describe('CustmerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustmerService = TestBed.get(CustmerService);
    expect(service).toBeTruthy();
  });
});
