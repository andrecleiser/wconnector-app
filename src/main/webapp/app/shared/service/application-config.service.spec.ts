import { TestBed } from '@angular/core/testing';

import { ApplicationConfigServerService } from './application-config-server.service';

describe('ApplicationConfigService', () => {
  let service: ApplicationConfigServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationConfigServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
