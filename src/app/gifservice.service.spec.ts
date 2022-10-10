import { TestBed } from '@angular/core/testing';

import { GifserviceService } from './gifservice.service';

describe('GifserviceService', () => {
  let service: GifserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
