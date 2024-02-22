import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IParamLogin, IParamLoginVerify, IQueryRegister, IQueryRegisterVerify, IQuerySessions } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://168.119.99.40:8080';

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

  postRegister(query: IQueryRegister) {
    const url = this.baseUrl + '/register';

    const queries = new HttpParams().appendAll(query);

    return this.http.post<any>(url, null, { params: queries }).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postRegisterVerify(query: IQueryRegisterVerify) {
    const url = this.baseUrl + '/register/verify';

    const queries = new HttpParams().appendAll(query);

    return this.http.post<any>(url, null, { params: queries }).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  postSessions(query: IQuerySessions) {
    const url = this.baseUrl + '/sessions';

    const queries = new HttpParams().appendAll(query);

    return this.http.post<any>(url, null, { headers: this.headers, params: queries }).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

  getSessions() {
    const url = this.baseUrl + '/sessions';

    return this.http.get<any>(url, { headers: this.headers }).pipe(
      tap(console.log),
      catchError(() => of<false>(false))
    );
  }

}
