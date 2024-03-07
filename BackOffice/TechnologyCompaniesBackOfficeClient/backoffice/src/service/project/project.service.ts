import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, count, map } from 'rxjs';
import { Project } from '../../assets/types/types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private http: HttpClient = inject(HttpClient)
  private projects:Observable<Project[]> = this.http.get<Project[]>("http://localhost:8080/projects") 

  getAllProjects(): Observable<Project[]> {
    return this.projects;
  }


  getCountProjects():Observable<number> {
    return this.projects.pipe(
      map(projects => projects.length)
    )
  }

}
