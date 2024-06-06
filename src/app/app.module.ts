import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReutilizablesModule } from './reutilizables/reutilizables.module';
import { PagesModule } from './pages/pages.module';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReutilizablesModule,
    PagesModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],

  bootstrap: [AppComponent]
})



export class AppModule {

  constructor(private router: Router) {

  }
}


