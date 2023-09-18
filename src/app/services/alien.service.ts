import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { Alien } from 'src/models/Alien';

@Injectable({
  providedIn: 'root'
})
export class AlienService {

  constructor(
    private http:HttpClient,
    private alertServ: AlertifyService,
    private  route:Router
  ) { }
  path = 'https://primusdb.azurewebsites.net/api/aliens/';
  getAliens():Observable<Alien[]>{
    return this.http.get<Alien[]>(this.path+"getall");
  }

  add(alien:Alien) {
    console.log("alien:",alien);
    this.http.post(this.path + 'add', alien).subscribe(() => {
      this.alertServ.success('Dna başarıyla eklendi');
      this.route.navigateByUrl('/');

    },
    (errorResponse) => {
        // Handle error response, including validation errors
        console.log("errorres:",errorResponse);

        // Display validation errors to the user
        if (errorResponse.error && errorResponse.error.errors) {
            const validationErrors = errorResponse.error.errors;
            console.log("error:",validationErrors);
            // Display validation errors to the user
        }
    }
    );
  }
  delete(alien:Alien) {
    console.log("alien:",alien);
    this.http.post(this.path + 'delete', alien).subscribe(() => {
      this.alertServ.success('Dna başarıyla Kaldırıldı');
      this.route.navigateByUrl('/');

    },
    (errorResponse) => {
        // Handle error response, including validation errors
        console.log("errorres:",errorResponse);

        // Display validation errors to the user
        if (errorResponse.error && errorResponse.error.errors) {
            const validationErrors = errorResponse.error.errors;
            console.log("error:",validationErrors);
            // Display validation errors to the user
        }
    }
    );
  }
}
