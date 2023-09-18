import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlienService } from 'src/app/services/alien.service';
import { AuthService } from 'src/app/services/auth.service';
import { Alien } from 'src/models/Alien';

@Component({
  selector: 'app-alien-add',
  templateUrl: './alien-add.component.html',
  styleUrls: ['./alien-add.component.css']
})
export class AlienAddComponent implements OnInit {
  constructor(private authServ: AuthService,
    private fBuilder: FormBuilder, private alienServ: AlienService,private Route:Router) { }
  alien: Alien;
  file :File;
  alienAddForm: FormGroup;
  ngOnInit(): void {
    this.createAlienForm();
  }
  createAlienForm() {
    this.alienAddForm = this.fBuilder.group(
      {
        homeWorld: ["", Validators.required],
        dnaSample: ["", Validators.required],
        givenName: ["", Validators.required],
        formFile: ["", Validators.required]

      }
    );
  }
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0]);
      this.file =event.target.files[0];
    }
  }
  add() {
    if (this.alienAddForm.valid) {
      this.alien = this.alienAddForm.value;


      if (this.file) { // Check if file is defined
        this.alien.formFile = this.file;
        console.log("formfile:",this.alien.formFile.name,",",this.alien.formFile.type,",",this.alien.formFile.size);
      }
      const alienFormData = new FormData();
      alienFormData.append("HomeWorld",this.alien.homeWorld);
      alienFormData.append("DnaSample",this.alien.dnaSample);
      alienFormData.append("GivenName",this.alien.givenName);
      alienFormData.append("FormFile",this.alien.formFile);
// Diğer form verilerini de ekleme işlemini burada gerçekleştirin, eğer varsa


      this.alien.userId = this.authServ.getCurrentUserId();

      console.log("alien:", this.alien);

      if (this.alien !== null) {
        alienFormData.append("UserId",this.alien.userId.toString());
        this.alienServ.add(alienFormData);


      }
    }
  }

  get isAuthenticated() {
    return this.authServ.loggedIn();
  }
}
