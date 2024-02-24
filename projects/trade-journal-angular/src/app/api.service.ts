import { HttpClient, HttpDownloadProgressEvent, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, of, tap } from 'rxjs';
import { IParamLogin, IParamLoginVerify, IParamRegister, IParamRegisterVerify, IParamSessions } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://188.34.165.249:8080';

  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
  });

  constructor(
    private http: HttpClient
  ) { }

  postLogin(param: IParamLogin) {
    const url = this.baseUrl + '/login';

    return this.http.post<any>(url, param).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postLoginVerify(param: IParamLoginVerify) {
    const url = this.baseUrl + '/login/verify';

    return this.http.post<any>(url, param).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postRegister(param: IParamRegister) {
    const url = this.baseUrl + '/register';

    return this.http.post<any>(url, param).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postRegisterVerify(param: IParamRegisterVerify) {
    const url = this.baseUrl + '/register/verify';

    return this.http.post<any>(url, param).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postSessions(param: IParamSessions) {
    const url = this.baseUrl + '/sessions';

    return this.http.post<any>(url, param, { headers: this.headers }).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  getSessions() {
    const url = this.baseUrl + '/sessions';

    const options: {
      headers: HttpHeaders;
      observe: 'events';
      reportProgress: boolean;
      responseType: 'text';
    } = {
      headers: this.headers,
      observe: 'events',
      reportProgress: true,
      responseType: 'text',
    };

    return this.http.get(url, options).pipe(
      filter<HttpEvent<string>>((response: HttpEvent<string>) => response.type === HttpEventType.DownloadProgress),
      tap((response) => {
        const value = (<HttpDownloadProgressEvent>response).partialText || '[]';
        console.log(value);
      }),
      catchError(() => of<false>(false))
    );
  }

}
