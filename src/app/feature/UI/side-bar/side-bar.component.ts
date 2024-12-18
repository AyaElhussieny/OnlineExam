import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';



@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule ,
    TieredMenuModule ,
    ButtonModule ,
    MenuModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Dashboard',
          icon: 'pi pi-file',
       },

       {
        label: 'Quizes',
        icon: 'pi pi-file',
       },
       {
        label: 'Logout',
        icon: 'pi pi-file',
     },

      ]
    }
}
