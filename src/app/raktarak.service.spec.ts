import { TestBed } from '@angular/core/testing';

import { RaktarakService } from './raktarak.service';

describe('RaktarakService', () => {
  let service: RaktarakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaktarakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
