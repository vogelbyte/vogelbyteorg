import { TestBed } from '@angular/core/testing';

import { MedicineDetailService } from './medicine-detail.service';

describe('MedicineDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicineDetailService = TestBed.get(MedicineDetailService);
    expect(service).toBeTruthy();
  });
});
