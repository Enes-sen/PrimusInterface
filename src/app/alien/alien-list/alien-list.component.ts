import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';
import { Alien } from 'src/models/Alien';

@Component({
  selector: 'app-alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.css']
})
export class AlienListComponent implements OnInit{
  constructor(private alienServ:AlienService){}
  aliens:Alien[] =[];
  ngOnInit(): void {
    this.alienServ.getAliens().subscribe(data=>{
      this.aliens = data;
    });
  }

}
