import { Component, Input, inject } from '@angular/core';
import { CrudService } from '../../service/company/crud.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  @Input()
  id!:number;
  crudService:CrudService = inject(CrudService);

  delete(){
    this.crudService.delete(this.id)
  }
}
