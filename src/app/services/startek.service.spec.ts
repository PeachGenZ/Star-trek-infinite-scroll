import { TestBed } from '@angular/core/testing';

import { StartekService } from './startek.service';

describe('StartekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartekService = TestBed.get(StartekService);
    expect(service).toBeTruthy();
  });
});
