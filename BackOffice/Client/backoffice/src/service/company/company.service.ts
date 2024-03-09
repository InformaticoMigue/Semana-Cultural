import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Company } from '../../assets/types/types';
import { Observable, catchError, find, map, max, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private httpClient = inject(HttpClient);
  private companies: Observable<Company[]> = this.httpClient.get<Company[]>("http://localhost:8081/companies");

  getAllCompanies(): Observable<Company[]> {
    return this.companies;
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
