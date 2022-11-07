import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollInputComponent } from './poll-input.component';

describe('PollInputComponent', () => {
  let component: PollInputComponent;
  let fixture: ComponentFixture<PollInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
