import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoryServiceService } from './category-service.service';

describe('CategoryServiceService', () => {
  let service: CategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClientModule], imports:[RouterTestingModule] });
    service = TestBed.inject(CategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
