import { Component, OnInit, inject } from '@angular/core';
import { CompanyService } from '../../service/company/company.service';
import { Company } from '../../assets/types/types';
import { CreateComponent } from "../create/create.component";
import { DeleteComponent } from "../delete/delete.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CreateComponent, DeleteComponent]
})
export class HomeComponent implements OnInit {
  companies!:Company[];
  companyService: CompanyService = inject(CompanyService);

  ngOnInit(): void {
    this.getCompanies()
  }
  
  companyDeleted(idCompany:number){
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }
}
