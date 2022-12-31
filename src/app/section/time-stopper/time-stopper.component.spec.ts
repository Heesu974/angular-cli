import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStopperComponent } from './time-stopper.component';

describe('TimeStopperComponent', () => {
  let component: TimeStopperComponent;
  let fixture: ComponentFixture<TimeStopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeStopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
