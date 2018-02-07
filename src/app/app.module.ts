import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { OperatorsComponent } from './components/operators/operators.component';

const appRoute: Routes = [
  { path: '', component: AppComponent },
  { path: 'operator', component: OperatorsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
