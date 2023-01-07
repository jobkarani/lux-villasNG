import { TestBed } from '@angular/core/testing';

import { CountryVillasService } from './countryvillas.service';

describe('CountryvillasService', () => {
  let service: CountryVillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryVillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
