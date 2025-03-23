import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from '../enviroments/enviroment';

export const apikeyInterceptor: HttpInterceptorFn = (req, next) => {

  const queryWithKey = req.clone({
    setParams:{
      api_key: environment.API_KEY
    }
  })
  return next(queryWithKey).pipe(
    catchError(error => {
      console.error('Error en la solicitud:', error);
      return throwError(error);
    })
  );
};
