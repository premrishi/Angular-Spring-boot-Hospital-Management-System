import { TestBed } from '@angular/core/testing';

import { AdminauthService } from './adminauth.service';

describe('AdminauthService', () => {
  let service: AdminauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
