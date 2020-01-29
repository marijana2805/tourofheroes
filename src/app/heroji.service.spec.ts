import { TestBed } from '@angular/core/testing';

import { HerojiService } from './heroji.service';

describe('HerojiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerojiService = TestBed.get(HerojiService);
    expect(service).toBeTruthy();
  });
});
