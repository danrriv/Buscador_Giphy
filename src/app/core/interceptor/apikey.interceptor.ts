import { HttpInterceptorFn } from '@angular/common/http';
import { Enviroment } from '../enviroments/enviroment';
import { catchError, throwError } from 'rxjs';

export const apikeyInterceptor: HttpInterceptorFn = (req, next) => {

  const queryWithKey = req.clone({
    setParams:{
      api_key: Enviroment.API_KEY
    }
  })
  return next(queryWithKey).pipe(
    catchError(error => {
      console.error('Error en la solicitud:', error);
      return throwError(error);
    })
  );
};
