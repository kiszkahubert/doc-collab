import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from "rxjs";

interface LoginResponse{
  token: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('http://localhost:8080/auth/login',{ email, password }).pipe(
      tap(response => this.storeToken(response))
    )
  }
  private storeToken(response: LoginResponse){
    localStorage.setItem('token', response.token);
    localStorage.setItem('expiresAt',(Date.now()+response.expiresIn).toString());
  }
  getToken(): string | null{
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean{
    const expiresAt = localStorage.getItem('expiresAt');
    if(!expiresAt) return false;
    return Date.now() < parseInt(expiresAt, 10);
  }
}
