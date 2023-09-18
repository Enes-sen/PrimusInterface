import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm: FormGroup;
  loginUser: any = {}; // You can remove this line

  constructor(private formBuilder: FormBuilder,private authServ:AuthService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    if (this.loginForm.valid) {
      this.loginUser = Object.assign({}, this.loginForm.value);
      this.authServ.login(this.loginUser);
      this.loginForm.reset();
    }
  }
  logOut() {
    this.authServ.logOut();
  }
  get isAuthenticated() {
    return this.authServ.loggedIn();
  }
}
