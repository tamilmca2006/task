import { TestBed } from '@angular/core/testing';

import { LocalDataStoreageService } from './local-data-storeage.service';

describe('LocalDataStoreageService', () => {
  let service: LocalDataStoreageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataStoreageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
