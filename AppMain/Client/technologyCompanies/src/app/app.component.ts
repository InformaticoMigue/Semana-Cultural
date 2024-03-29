import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from "../components/footer/footer.component";
import Aos from 'aos';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        Aos.init()
        window.addEventListener('load', () =>{
            Aos.refresh()
        })
    }
}
