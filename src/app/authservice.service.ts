import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

//import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME:string = "jwt_token";
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  authServiceEndpoint:string;
  token:string;

  constructor(private http: HttpClient,private router:Router) {
    this.authServiceEndpoint = "http://localhost:8080/api/v1";
  }



  loginUser(user): Observable<any> {
    const url = `${this.authServiceEndpoint}/login`;
    return this.http.post(url, user);
  }

  setToken(token:string) {
    return localStorage.setItem(TOKEN_NAME, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
  deleteToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }

  removeToken() {
    window.localStorage.removeItem(TOKEN_NAME);
    }



  getTokenExpirationDate(token: string) {
    const decoded:any = jwt_decode(token);
    if(decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  


  isTokenExpired(token?: string): boolean {
    if(!token) {
      token = this.getToken();
    }
    if(!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): string {
    return this.getToken();
  }


  
}