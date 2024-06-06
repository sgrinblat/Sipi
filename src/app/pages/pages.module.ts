import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import { ReutilizablesModule } from '../reutilizables/reutilizables.module';

import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent,
  ],
  exports: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReutilizablesModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})
export class PagesModule { }

