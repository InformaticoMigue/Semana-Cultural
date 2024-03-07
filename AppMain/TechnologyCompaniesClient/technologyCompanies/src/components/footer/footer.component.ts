import { Component, OnInit, inject } from '@angular/core';
import { SolutionService } from '../../service/solution/solution.service';

type SolutionName = {
  id: number
  name: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  solutionsService:SolutionService = inject(SolutionService);
  solutionsName:SolutionName[] = []

  ngOnInit(): void {
    this.solutionsService.getAllSolutions().subscribe(solutions => {
      this.solutionsName = solutions.map(solution => 
        ({ name: solution.name, id: solution.id }))
        .slice(0,7);
    });
    
  } 

}
