import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthApiService } from 'auth-api';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthApiService);
  let token = authService.getToken();
  console.log(token)
  const authReq = req.clone({
    headers: req.headers.set('token', token)
  });
  return next(authReq);
};
