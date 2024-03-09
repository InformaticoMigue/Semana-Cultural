import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Company } from '../../assets/types/types';
import { Observable, catchError, find, map, max, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private httpClient = inject(HttpClient);
  private companies: Observable<Company[]> = this.httpClient.get<Company[]>("http://localhost:8080/companies");

  getAllCompanies(): Observable<Company[]> {
    return this.companies;
  }

  getCompanyMostAnualIncomme(): Observable<Company> {
    return this.companies.pipe(
      map(companies => companies.reduce((maxCompany, company) => {
        return company.annualIncome > maxCompany.annualIncome ? company : maxCompany;
      }))
    );
  }

  getCompanyMostEmployees(): Observable<Company> {
    return this.companies.pipe(
      map(companies => companies.reduce((maxCompany, company) => {
        return company.numberEmployees > maxCompany.numberEmployees ? company : maxCompany;
      }))
    );
  }

  findById(id: number): Observable<Company | undefined> {
    return this.companies.pipe(
      map(companies => companies.find(company => company.id === id))
    )
  }

  getCountCompanies(): Observable<number>{
    return this.companies.pipe(
      map(companies => companies.length)
    )
  }

}
