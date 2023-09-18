import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { AlienComponent } from './alien/alien.component';
import { AlienListComponent } from './alien/alien-list/alien-list.component';
import { AlienAddComponent } from './alien/alien-add/alien-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    AlienComponent,
    AlienListComponent,
    AlienAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
