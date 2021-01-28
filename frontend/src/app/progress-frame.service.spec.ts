import { TestBed } from '@angular/core/testing';

import { ProgressFrameService } from './progress-frame.service';

describe('ProgressFrameService', () => {
  let service: ProgressFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
