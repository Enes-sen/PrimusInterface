import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlienComponent } from './alien/alien.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"alien",component:AlienComponent},
  {path:"register",component:RegisterComponent},
  { path: '/', redirectTo: 'alien', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
