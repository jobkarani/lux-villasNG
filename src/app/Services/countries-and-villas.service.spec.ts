import { TestBed } from '@angular/core/testing';

import { CountriesAndVillasService } from './countries-and-villas.service';

describe('CountriesAndVillasService', () => {
  let service: CountriesAndVillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesAndVillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
