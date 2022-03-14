import { TestBed } from '@angular/core/testing';

import { AuthserService } from './authser.service';

describe('AuthserService', () => {
  let service: AuthserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
