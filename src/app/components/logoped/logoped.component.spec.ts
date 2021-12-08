import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopedComponent } from './logoped.component';

describe('LogopedComponent', () => {
  let component: LogopedComponent;
  let fixture: ComponentFixture<LogopedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogopedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
