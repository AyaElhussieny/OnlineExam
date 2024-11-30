import { TestBed } from '@angular/core/testing';

import { AuthApiAdapterService } from './auth-api.adapter';

describe('AuthApiAdapterService', () => {
  let service: AuthApiAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthApiAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
