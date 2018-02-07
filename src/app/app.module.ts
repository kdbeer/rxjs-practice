import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'operator', component: OperatorsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
