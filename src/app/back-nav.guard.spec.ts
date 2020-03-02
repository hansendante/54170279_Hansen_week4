import { TestBed } from '@angular/core/testing';

import { BackNavGuard } from './back-nav.guard';

describe('BackNavGuard', () => {
  let guard: BackNavGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackNavGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
