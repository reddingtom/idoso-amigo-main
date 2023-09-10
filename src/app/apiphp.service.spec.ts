import { TestBed } from '@angular/core/testing';

import { ApiphpService } from './apiphp.service';

describe('ApiphpService', () => {
  let service: ApiphpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiphpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
