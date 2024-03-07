import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Solution } from '../../assets/types/types';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private http:HttpClient = inject(HttpClient);
  private solutions:Observable<Solution[]> = this.http.get<Solution[]>("http://localhost:8080/solutions")
  
  getAllSolutions():Observable<Solution[]>{
    return this.solutions;
  }

  getCountSolutions():Observable<number>{
    return this.solutions.pipe(
      map(solutions => solutions.length)
    )
  }
}
