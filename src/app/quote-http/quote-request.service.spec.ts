import { TestBed, inject } from '@angular/core/testing';

import { QuoteRequestService } from './quote-request.service';

describe('QuoteRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteRequestService]
    });
  });

  it('should be created', inject([QuoteRequestService], (service: QuoteRequestService) => {
    expect(service).toBeTruthy();
  }));
});
