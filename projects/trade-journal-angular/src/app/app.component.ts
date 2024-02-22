import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  email = '';
  password = '';
  key = '';
  secret = '';
  sessionName = '';
  sessionDescription = '';

  constructor(
    private apiService: ApiService,
  ) { }

  login() {
    this.apiService.postLogin({
      email: this.email,
      password: this.password,
    }).pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
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
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
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
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
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
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
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
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe();
  }

  getSession() {
    this.apiService.getSessions().pipe(
      tap({
        next: (response) => { console.log('%cstatus of this request is : Ok', 'font-size:16px;font-weight:bold;color:#00ff00;'); },
        error: (error) => { console.log('%cstatus of this request is : Error', 'font-size:16px;font-weight:bold;color:#ff0000;'); },
        complete: () => { console.log('status of this request is : Complete'); },
      })
    ).subscribe();
  }

}
