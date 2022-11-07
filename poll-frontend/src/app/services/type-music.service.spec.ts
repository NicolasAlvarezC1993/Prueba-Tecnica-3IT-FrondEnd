import { TestBed } from '@angular/core/testing';

import { TypeMusicService } from './type-music.service';

describe('TypeMusicService', () => {
  let service: TypeMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
