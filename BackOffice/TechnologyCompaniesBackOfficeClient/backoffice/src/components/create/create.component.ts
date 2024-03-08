import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  formBuilder:FormBuilder = inject(FormBuilder);
  formCreate:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[A-Za-záéíóúñÑüÜÁÉÍÓÚÑÜ ]+$")]],
      phone: ['', [Validators.required,Validators.pattern("^[0-9]{9}$")]],
      email: ['', [Validators.required, Validators.email]],
      url: ['',[Validators.required, Validators.pattern("^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$")]],
      employees: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      anualIncomme: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      countryOfOrigin: ['',[Validators.required, Validators.pattern("^[A-Za-záéíóúñÑüÜÁÉÍÓÚÑÜ ]+$")]],
      date: []
    })
  }
  onSubmit() {
    console.log(this.formCreate.value);
  }
}
