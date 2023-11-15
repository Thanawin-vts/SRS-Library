import { TestBed } from '@angular/core/testing';

import { SrsfirstlibraryService } from './srsfirstlibrary.service';

describe('SrsfirstlibraryService', () => {
  let service: SrsfirstlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrsfirstlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
