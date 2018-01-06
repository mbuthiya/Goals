import { TestBed, inject } from '@angular/core/testing';

import { GoalService } from './goal.service';

describe('GoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalService]
    });
  });

  it('should be created', inject([GoalService], (service: GoalService) => {
    expect(service).toBeTruthy();
  }));
});
