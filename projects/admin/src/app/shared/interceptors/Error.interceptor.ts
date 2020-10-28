import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((httpErrorResponse: HttpErrorResponse) => {
                console.log('asdfasdfsdf');
                if (httpErrorResponse.status === 404) {
                    
                    console.log(httpErrorResponse.error);
                    this.messageService.add({
                        key: 'tr',
                        severity: 'error',
                        summary: 'Error [' + httpErrorResponse.error.id + ']',
                        detail: httpErrorResponse.message,
                        sticky: true,
                    })
                }
                return throwError(httpErrorResponse)
            })
        )
    }
    constructor(private messageService: MessageService) { }
}