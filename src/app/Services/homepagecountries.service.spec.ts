import { TestBed } from '@angular/core/testing';

import { HomepagecountriesService } from './homepagecountries.service';

describe('HomepagecountriesService', () => {
  let service: HomepagecountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepagecountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
