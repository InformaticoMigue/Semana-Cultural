import { Component, OnInit, inject } from '@angular/core';
import { NavbarTopComponent } from '../navbar-top/navbar-top.component';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../service/company/company.service';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


type CompanyNameId = {
  id: number,
  name: string
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [NavbarTopComponent, RouterLink, CommonModule]
})
export class NavbarComponent implements OnInit {

  private companiesService: CompanyService = inject(CompanyService);
  namesCompanies: CompanyNameId[] = [];
  userHideNavbar: boolean = false;

  ngOnInit(): void {
    this.companiesService.getAllCompanies().subscribe(companies => {
      this.namesCompanies = companies.map(company => ({ id: company.id, name: company.name }));
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {

    if (window.scrollY > 170) {
      this.userHideNavbar = true;
    }else{
      this.userHideNavbar = false;
    }
  }

}
