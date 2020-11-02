import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockInterceptorGlobals } from '../globals/mock.interceptor.globals';

@Injectable ({
    providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (MockInterceptorGlobals.mockInterceptorCallback !== null) {
            return MockInterceptorGlobals.mockInterceptorCallback(req, new URL(req.url), next);
        }
        return next.handle(req)
    }
}
