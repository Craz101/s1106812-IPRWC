import { TestBed } from '@angular/core/testing';
import { WebshopUserService } from './webshopUser.service';

describe('WebshopUserService', () => {
  let service: WebshopUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebshopUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
