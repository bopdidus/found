import { TestBed } from '@angular/core/testing';

import { EncryptInterceptorService } from './encrypt-interceptor.service';

describe('EncryptInterceptorService', () => {
  let service: EncryptInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
