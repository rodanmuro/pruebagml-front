import { TestBed } from '@angular/core/testing';

import { IsVisibleService } from './is-visible.service';

describe('IsVisibleServiceService', () => {
  let service: IsVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
