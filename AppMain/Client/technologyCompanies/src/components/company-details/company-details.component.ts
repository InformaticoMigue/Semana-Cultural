import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../service/company/company.service';
import { Company } from '../../assets/types/types';
import { Observable } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
import { SolutionCardComponent } from '../solution-card/solution-card.component';
import { MapCompanyLocationsComponent } from "../map-company-locations/map-company-locations.component";


@Component({
    selector: 'app-company-details',
    standalone: true,
    templateUrl: './company-details.component.html',
    styleUrl: './company-details.component.css',
    imports: [CarouselModule, SolutionCardComponent, MapCompanyLocationsComponent]
})
export class CompanyDetailsComponent implements OnInit{
  router:Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  companyService:CompanyService = inject(CompanyService);
  company!:Company;
  isCharged = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe (params => {
      const idCompany = +params.get("id")!
      const companyFind:Observable<Company | undefined> = this.companyService.findById(idCompany);
      companyFind.subscribe(company  =>  {
        if (company) {
          this.company = company 
          this.isCharged = true
          
        } else {
          this.router.navigate(["/"])      
        }
      })      
    })
  }

}
