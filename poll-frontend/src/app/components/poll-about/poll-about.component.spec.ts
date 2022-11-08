import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollAboutComponent } from './poll-about.component';

describe('PollAboutComponent', () => {
  let component: PollAboutComponent;
  let fixture: ComponentFixture<PollAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
