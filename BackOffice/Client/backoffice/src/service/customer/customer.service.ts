import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from '../../assets/types/types';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private http: HttpClient = inject(HttpClient);
  private customers:Observable<Customer[]> = this.http.get<Customer[]>("http://localhost:8080/customers");

  getAllCustomers(): Observable<Customer[]> {
    return this.customers;
  }

  getCountCustomers(): Observable<number> {
    return this.customers.pipe(
      map(customers => customers.length)
    )
  }
}
