import { TestBed } from '@angular/core/testing';

import { KingsCrudLibService } from './kings-crud-lib.service';

describe('KingsCrudLibService', () => {
  let service: KingsCrudLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KingsCrudLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
