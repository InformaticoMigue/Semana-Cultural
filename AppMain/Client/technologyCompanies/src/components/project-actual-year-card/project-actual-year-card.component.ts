import { Component, Input, OnInit, inject } from '@angular/core';
import { Company, Project } from '../../assets/types/types';
import { CompanyService } from '../../service/company/company.service';

@Component({
  selector: 'app-project-actual-year-card',
  standalone: true,
  imports: [],
  templateUrl: './project-actual-year-card.component.html',
  styleUrl: './project-actual-year-card.component.css'
})
export class ProjectActualYearCardComponent implements OnInit{

  @Input()
  projectActualYear!: Project;
  
  private companyService:CompanyService = inject(CompanyService)
  companyByProject: Company | undefined;

  ngOnInit(): void {      
    this.setProjectCompany(this.projectActualYear)
  }

  setProjectCompany(project: Project){
    this.companyService.findById(project.companyId).subscribe(company => {
      this.companyByProject = company;
    })
  }

}
