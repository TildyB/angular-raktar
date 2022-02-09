import { TestBed } from '@angular/core/testing';

import { TargyakService } from './targyak.service';

describe('TargyakService', () => {
  let service: TargyakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargyakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
