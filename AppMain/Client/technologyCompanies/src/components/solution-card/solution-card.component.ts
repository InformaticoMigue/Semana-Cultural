import { Component, Input } from '@angular/core';
import { Solution } from '../../assets/types/types';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [],
  templateUrl: './solution-card.component.html',
  styleUrl: './solution-card.component.css'
})
export class SolutionCardComponent {
  
  @Input()
  solution!:Solution;
}
