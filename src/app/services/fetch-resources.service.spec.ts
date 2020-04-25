import { TestBed } from '@angular/core/testing';

import { FetchResourcesService } from './fetch-resources.service';

describe('FetchResourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchResourcesService = TestBed.get(FetchResourcesService);
    expect(service).toBeTruthy();
  });
});
