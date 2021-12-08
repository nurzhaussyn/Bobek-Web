import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalexerciseComponent } from './physicalexercise.component';

describe('PhysicalexerciseComponent', () => {
  let component: PhysicalexerciseComponent;
  let fixture: ComponentFixture<PhysicalexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalexerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
