import {NbAuthService, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbAuthToken} from '@nebular/auth';
import {Injectable, Injector, Inject} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              @Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER) protected filter) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isAuthenticatedOrRefresh()
      .pipe(
        switchMap(authenticated => {
          if (authenticated) {
            return this.authService.getToken().pipe(
              switchMap((token: NbAuthToken) => {
                const JWT = 'Bearer ' + `${token.getValue()}`;
                req = req.clone({
                  setHeaders: {
                    Authorization: JWT,
                  },
                });
                return next.handle(req);
              }),
            );
          } else {
            return next.handle(req);
          }
        }),
      );
    // } else {
    //   return next.handle(req);
    // }
  }

  protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }
}
