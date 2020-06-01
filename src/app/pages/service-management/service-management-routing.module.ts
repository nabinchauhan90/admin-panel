import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServiceManagementComponent } from "./service-management.component";
import { ServicesComponent } from "./services/services.component";
import { NewServiceComponent } from "./new-service/new-service.component";

const routes: Routes = [
  {
    path: "",
    component: ServiceManagementComponent,
    children: [
      { path: "services", component: ServicesComponent },
      { path: "new-service", component: NewServiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceManagementRoutingModule {}
