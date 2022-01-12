import { TestBed } from '@angular/core/testing';

import { BoxserviceService } from './boxservice.service';

describe('BoxserviceService', () => {
  let service: BoxserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
