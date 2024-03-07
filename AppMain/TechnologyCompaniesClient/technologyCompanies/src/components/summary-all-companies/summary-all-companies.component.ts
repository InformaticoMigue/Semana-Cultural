import { Component, OnInit, inject } from '@angular/core';
import { CompanyService } from '../../service/company/company.service';
import { ProjectService } from '../../service/project/project.service';
import { CustomerService } from '../../service/customer/customer.service';
import { SolutionService } from '../../service/solution/solution.service';

@Component({
  selector: 'app-summary-all-companies',
  standalone: true,
  imports: [],
  templateUrl: './summary-all-companies.component.html',
  styleUrl: './summary-all-companies.component.css'
})
export class SummaryAllCompaniesComponent implements OnInit {
  allProjects: number = 0;
  allCustomers: number = 0;
  allCompanies: number = 0;
  allSolutions: number = 0;

  projectsService:ProjectService = inject(ProjectService);
  customerService:CustomerService = inject(CustomerService);
  companiesService:CompanyService = inject(CompanyService);
  solutionsService:SolutionService = inject(SolutionService);

  ngOnInit() {
    this.projectsService.getCountProjects().subscribe(c => {
      this.allProjects = c;
    })
    this.customerService.getCountCustomers().subscribe(c => {
      this.allCustomers = c
    })
    this.companiesService.getCountCompanies().subscribe(c => {
      this.allCompanies = c;
    })
    this.solutionsService.getCountSolutions().subscribe(c => {
      this.allSolutions = c
    })

  }
}
