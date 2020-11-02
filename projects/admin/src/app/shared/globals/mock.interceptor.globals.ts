import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

interface MockInterceptorGlobalsInterface {
    mockInterceptorCallback: (request: HttpRequest<any>, url: URL, next: HttpHandler) => Observable<HttpEvent<any>>;
}

export const MockInterceptorGlobals: MockInterceptorGlobalsInterface = {
    mockInterceptorCallback: null
};