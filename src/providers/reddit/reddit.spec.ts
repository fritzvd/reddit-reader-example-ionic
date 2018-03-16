import { TestBed, inject } from '@angular/core/testing';

import { RedditProvider  } from './reddit';

describe('RedditProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditProvider]
    });
  });

  it('should be created', inject([RedditProvider], (service: RedditProvider) => {
    expect(service).toBeTruthy();
  }));
});
