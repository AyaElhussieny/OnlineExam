import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  CommonModule,
  MenubarModule,
  ToastModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items: any[] | undefined;

  constructor(){}


  ngOnInit(): void {
 this.items = [
            {
                label: 'English',
                icon: 'pi pi-home',
                items: [
                  {
                      label: 'English',
                      icon: 'pi pi-bolt'
                  },
                  {
                      label: 'Arabic',
                      icon: 'pi pi-server'
                  },
                ]
            },
            {
                label: 'Sign in',
                icon: 'pi pi-user'
            },
            {
                label: 'Register',
                icon: 'pi pi-address-book',
            }

          ]
}


action(){
  //console.log(e);
}
}