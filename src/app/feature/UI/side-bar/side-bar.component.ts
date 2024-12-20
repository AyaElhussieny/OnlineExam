import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';





@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule ,
    TieredMenuModule ,
    ButtonModule ,
    MenuModule ,
    AvatarModule ,
    RippleModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        separator : true
      },
     
      {
          label: 'Dashboard',
          icon: 'pi pi-microsoft',
       },

       {
        label: 'Quiz History',
        icon: 'pi pi-address-book',
       },
       {
        label: 'Log out',
        icon: 'pi pi-arrow-left',
     },

      ]
    }
}
