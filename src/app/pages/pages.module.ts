import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import { ReutilizablesModule } from '../reutilizables/reutilizables.module';

import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListRequestComponent } from './list-request/list-request.component';


@NgModule({
  declarations: [
    HomepageComponent,
    DashboardComponent,
    ListRequestComponent,
  ],
  exports: [
    HomepageComponent,
    DashboardComponent,
    ListRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReutilizablesModule,
  ],
  providers: []
})
export class PagesModule { }

