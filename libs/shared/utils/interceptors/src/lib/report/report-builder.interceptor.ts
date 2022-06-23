import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ReportBuilderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mappedReq = req.clone({
      // headers:
    });
    const baseUrl = 'http://localhost:4200';
    return next.handle(req.url.match(baseUrl) ? mappedReq : req);
  }
}

export const interceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ReportBuilderInterceptor,
  multi: true
};
