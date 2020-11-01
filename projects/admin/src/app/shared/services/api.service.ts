import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl: string = 'http://192.168.1.70:3000/';

  get(url: string, params: any = {}): Observable<any> {
    return this.httpClient.get<any>([this.apiBaseUrl, url].join(''), {
      params
    });
  } 

  post(url: string, data: any): Observable<any> {
    return this.httpClient.post<any>([this.apiBaseUrl, url].join(''), JSON.stringify(data));
  }
  
  patch(url: string, data: any): Observable<any> {
    return this.httpClient.patch<any>([this.apiBaseUrl, url].join(''), JSON.stringify(data));
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete<any>([this.apiBaseUrl, url].join(''));
  }

  constructor(private httpClient: HttpClient) { }
}
