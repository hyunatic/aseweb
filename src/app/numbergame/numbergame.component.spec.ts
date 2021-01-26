import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbergameComponent } from './numbergame.component';

describe('NumbergameComponent', () => {
  let component: NumbergameComponent;
  let fixture: ComponentFixture<NumbergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbergameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
