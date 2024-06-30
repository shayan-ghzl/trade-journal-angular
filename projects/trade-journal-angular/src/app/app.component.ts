import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { lastValueFrom, tap } from 'rxjs';
import { ApiQueryService } from './api-query.service';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    AngularQueryDevtools,
    JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  email = 'shayan97.tti@gmail.com';
  password = 'Hotel12345';
  key = '';
  secret = '';
  sessionName = '';
  sessionDescription = '';

  constructor(
    private apiService: ApiService,
    private apiQueryService: ApiQueryService,
  ) { }

  postsQuery = injectQuery(() => ({
    queryKey: ['posts'],
    queryFn: () => lastValueFrom(this.apiQueryService.postLogin$({
      email: this.email,
      password: this.password,
    })),
  }));

  queryClient = injectQueryClient();

  login() {
    this.apiService.postLogin({
      email: this.email,
      password: this.password,
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe(next => this.key = next.key);
  }

  loginVerify() {
    this.apiService.postLoginVerify({
      key: this.key,
      secret: this.secret
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe(next => localStorage.setItem('token', next.token));
  }

  register() {
    this.apiService.postRegister({
      email: this.email
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe(next => this.key = next.key);
  }

  registerVerify() {
    this.apiService.postRegisterVerify({
      key: this.key,
      password: this.password,
      secret: this.secret
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe(next => localStorage.setItem('token', next.token));
  }

  setSession() {
    this.apiService.postSessions({
      sessionId: '',
      name: this.sessionName,
      description: this.sessionDescription
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe();
  }

  getSession() {
    this.apiService.getSessions().pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#198754;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe();
  }

}
