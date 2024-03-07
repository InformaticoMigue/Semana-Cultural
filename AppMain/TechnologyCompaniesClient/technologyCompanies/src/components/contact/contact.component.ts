import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ActualYearProjectsComponent } from "../actual-year-projects/actual-year-projects.component";
import Aos from 'aos'; 

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [InputTextModule, ReactiveFormsModule, InputTextareaModule, CommonModule, ActualYearProjectsComponent]
})
export class ContactComponent implements OnInit{

  private formBuider:FormBuilder = inject(FormBuilder)
  formContact: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formContact = this.formBuider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject:['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  
}
