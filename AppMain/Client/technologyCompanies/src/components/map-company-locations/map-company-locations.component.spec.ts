import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCompanyLocationsComponent } from './map-company-locations.component';

describe('MapCompanyLocationsComponent', () => {
  let component: MapCompanyLocationsComponent;
  let fixture: ComponentFixture<MapCompanyLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCompanyLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapCompanyLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
