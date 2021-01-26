import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorgameComponent } from './colorgame.component';

describe('ColorgameComponent', () => {
  let component: ColorgameComponent;
  let fixture: ComponentFixture<ColorgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
