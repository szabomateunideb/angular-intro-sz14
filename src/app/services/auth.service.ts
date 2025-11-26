import { Injectable } from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../models/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9090/auth';

  public isLoggedIn$ =
    new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto) {
    return this
      .http
      .post(`${this.apiUrl}/bejelentkezes`, loginDto, {responseType: "text"})
      .pipe(
        tap(token => {
          localStorage.setItem('token', token);
          this.isLoggedIn$.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
