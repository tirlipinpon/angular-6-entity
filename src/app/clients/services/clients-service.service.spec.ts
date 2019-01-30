import { TestBed } from '@angular/core/testing';

import { ClientsServiceService } from './clients-service.service';

describe('ClientsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsServiceService = TestBed.get(ClientsServiceService);
    expect(service).toBeTruthy();
  });
});
