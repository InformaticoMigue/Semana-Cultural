import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualYearProjectsComponent } from './actual-year-projects.component';

describe('ActualYearProjectsComponent', () => {
  let component: ActualYearProjectsComponent;
  let fixture: ComponentFixture<ActualYearProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualYearProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualYearProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
