import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAllCompaniesComponent } from './summary-all-companies.component';

describe('SummaryAllCompaniesComponent', () => {
  let component: SummaryAllCompaniesComponent;
  let fixture: ComponentFixture<SummaryAllCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryAllCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
