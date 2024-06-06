import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from "swiper/angular";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
  ]
})
export class ReutilizablesModule { }
