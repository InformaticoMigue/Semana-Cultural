import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CompanyDetailsComponent } from '../components/company-details/company-details.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'company/:id', component: CompanyDetailsComponent},
    { path: '**', redirectTo: '/' }, 
];
