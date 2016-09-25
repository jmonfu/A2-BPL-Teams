/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeamsServiceService } from './teams-service.service';

describe('Service: TeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsServiceService]
    });
  });

  it('should ...', inject([TeamsServiceService], (service: TeamsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
