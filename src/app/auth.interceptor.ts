import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  var authWithAuhtorizationHerder = req.clone({ setHeaders: {"Authorization" : "Bearer 45456467987"  }})
  return next(authWithAuhtorizationHerder);
};
