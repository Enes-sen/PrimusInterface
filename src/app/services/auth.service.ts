import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUser } from 'src/models/LoginUser';
import { RegisterUser } from 'src/models/RegisterUser';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }
  path = 'http://localhost:5058/api/auth/';
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY = 'token';

  login(loginUser:LoginUser){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + 'login', loginUser, { responseType: 'text' })
      .subscribe((data) => {
        console.log('data: ', data.toString());
        this.saveToken(data.toString());

        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        this.alertifyService.success('Giriş yapıldı');
        this.getCurrentUserId();
        this.router.navigateByUrl('/alien');
      });
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {
        this.alertifyService.success('Kayıt İşlemi Başarılı!');
      });
  }
  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error('Çıkış yapıldı');
  }
  loggedIn() {
    return this.jwtHelper.isTokenExpired(this.token!);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token!).nameid;
  }
}
