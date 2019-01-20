import { TestBed, inject } from '@angular/core/testing';

import { DServiceService } from './d-service.service';

describe('DServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DServiceService]
    });
  });

  it('should be created', inject([DServiceService], (service: DServiceService) => {
    expect(service).toBeTruthy();
  }));
});
