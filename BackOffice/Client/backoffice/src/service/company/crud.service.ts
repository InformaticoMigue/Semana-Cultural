import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private http:HttpClient = inject(HttpClient);
  private api:string = "http://localhost:8081/companies/"

  delete(id:number){
    this.http.delete(`${this.api}${id}`).subscribe(data =>{
      
      return data;
    })
  }
}
