import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./core/pages/login/login.component').then(c => c.LoginComponent),
        title:'Login'
    }
];
