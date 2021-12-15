import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexedDBService } from './indexed-db.service';

describe('IndexedDBService', () => {
  let service: IndexedDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule],});
    service = TestBed.inject(IndexedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
