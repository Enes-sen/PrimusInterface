import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';
import { AuthService } from 'src/app/services/auth.service';
import { Alien } from 'src/models/Alien';

@Component({
  selector: 'app-alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.css']
})
export class AlienListComponent implements OnInit{
  constructor(private alienServ:AlienService, private authServ:AuthService){}
  aliens:Alien[] =[];
  ngOnInit(): void {
    this.alienServ.getAliens().subscribe(data=>{
      this.aliens = data;
    });
  }
  delete(alien: Alien) {
    if (alien) {
        console.log("Alien deleted:", alien);
        this.alienServ.delete(alien);
        // Burada başka işlemler yapabilirsiniz.
    }
 }
  get isOwner() {
    return this.authServ.getCurrentUserId();
  }
  get isAuthenticated() {
    return this.authServ.loggedIn();
  }
}
