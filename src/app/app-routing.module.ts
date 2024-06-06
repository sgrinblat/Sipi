import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomepageComponent } from "./pages/homepage/homepage.component";

const routes: Routes = [
    {
      path: "",
      component: HomepageComponent,
      pathMatch: "full"
    },
    {
      path: `**`,
      pathMatch: "full",
      redirectTo: "/error"
    }

]

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })]
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule {}
