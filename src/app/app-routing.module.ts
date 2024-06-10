import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomepageComponent } from "./pages/homepage/homepage.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ListRequestComponent } from "./pages/list-request/list-request.component";
import { EditRequestComponent } from "./pages/edit-request/edit-request.component";

const routes: Routes = [
    {
      path: "",
      component: HomepageComponent,
      pathMatch: "full"
    },
    {
      path: "dashboard",
      component: DashboardComponent,
    },
    {
      path:"list-request",
      component: ListRequestComponent,
    },
    {
      path:"list-request/:requestId",component:EditRequestComponent
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
