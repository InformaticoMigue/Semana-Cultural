import { Component, OnInit, inject } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { Project } from '../../assets/types/types';
import { CarouselModule } from 'primeng/carousel';
import { ProjectActualYearCardComponent } from '../project-actual-year-card/project-actual-year-card.component';

@Component({
  selector: 'app-actual-year-projects',
  standalone: true,
  imports: [CarouselModule, ProjectActualYearCardComponent],
  templateUrl: './actual-year-projects.component.html',
  styleUrl: './actual-year-projects.component.css'
})
export class ActualYearProjectsComponent implements OnInit {

  private projectService:ProjectService = inject(ProjectService);
  projectsThisAnual:Project[] = [];

  ngOnInit(): void {
    this.projectService.getProjectsThisYear().subscribe(projects => {
      this.projectsThisAnual = projects;
    });
  }

}