import { TestBed } from '@angular/core/testing';

import { VillasService } from './villas.service';

describe('VillasService', () => {
  let service: VillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
