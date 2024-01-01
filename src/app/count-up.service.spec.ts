import { TestBed } from '@angular/core/testing';

import { CountUpService } from './count-up.service';

describe('CountUpServiceService', () => {
  let service: CountUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
