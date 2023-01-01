import { TestBed } from '@angular/core/testing';

import { CountryVillasService } from './country-villas.service';

describe('CountryVillasService', () => {
  let service: CountryVillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryVillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
