import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ATypePageComponent } from './a-type-page/a-type-page.component';
import { BTypePageComponent } from './b-type-page/b-type-page.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'home', component: HomeComponent }, 
  { path: 'aType', component: ATypePageComponent }, 
  { path: 'bType', component: BTypePageComponent }, 
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
