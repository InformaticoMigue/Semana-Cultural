import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActualYearCardComponent } from './project-actual-year-card.component';

describe('ProjectActualYearCardComponent', () => {
  let component: ProjectActualYearCardComponent;
  let fixture: ComponentFixture<ProjectActualYearCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectActualYearCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectActualYearCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
