import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SolutionService } from '../../service/solution/solution.service';
import { Company, Solution } from '../../assets/types/types';
import { SolutionCardComponent } from '../solution-card/solution-card.component';
import { CarouselModule } from 'primeng/carousel';
import { CompanyService } from '../../service/company/company.service';
import { RouterLink } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { SummaryAllCompaniesComponent } from "../summary-all-companies/summary-all-companies.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NavbarComponent, SolutionCardComponent, CarouselModule, RouterLink, ContactComponent, SummaryAllCompaniesComponent, FooterComponent]
})
export class HomeComponent implements OnInit {
    private solutionService:SolutionService = inject(SolutionService);
    solutions:Solution[] = [];
    companyMostEmployees:Company|undefined;
    companyMostAnualIncomme: Company|undefined;
    private companyService:CompanyService = inject(CompanyService);

    loadSolutions(): void {
        this.solutionService.getAllSolutions().subscribe(solutions => {
            this.solutions = solutions;
        })
    }

    loadCompanyMostEmployees(): void {
        this.companyService.getCompanyMostEmployees().subscribe(company => {
            this.companyMostEmployees = company;
        })
    }

    loadCompanyMostAnualIncomme():void {
        this.companyService.getCompanyMostAnualIncomme().subscribe(company => {
            this.companyMostAnualIncomme = company;                        
        })
    }

    ngOnInit(): void {
        
        this.loadCompanyMostAnualIncomme()
        this.loadCompanyMostEmployees()
        this.loadSolutions()    
    }
}
