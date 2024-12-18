import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./core/pages/auth/auth.component').then(c => c.AuthComponent),
        children:[
            {
               path:'',
               loadComponent :() => import('./core/pages/login/login.component').then( c => c.LoginComponent),
               title : 'Login'
            },
            {
                path:'sign-up',
                loadComponent :()=> import ('./core/pages/register/register.component').then( c => c.RegisterComponent),
                title : 'Register'
            },
            {
                path:'forget-password',
                loadComponent : ()=> import('./core/pages/forget-password/forget-password.component').then( c => c.ForgetPasswordComponent),
                title : 'Forget Password'
            },
            {
                path :'reset-code',
                loadComponent : ()=> import('./core/pages/otp/otp.component').then( c => c.OTPComponent),
                title :'Reset Code'
            },
            {
                path :'reset-password',
                loadComponent : ()=> import('./core/pages/reset-password/reset-password.component').then( c => c.ResetPasswordComponent),
                title :'Reset Password'

            }
        ]     
    }
    ,
            {
                path:'home',
                loadComponent :()=> import('./feature/pages/home/home.component').then( c => c.HomeComponent),
                title : 'Home'
            }
];
