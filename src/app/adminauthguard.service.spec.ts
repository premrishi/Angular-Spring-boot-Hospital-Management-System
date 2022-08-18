import { TestBed } from '@angular/core/testing';

import { AdminauthguardService } from './adminauthguard.service';

describe('AdminauthguardService', () => {
  let service: AdminauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
