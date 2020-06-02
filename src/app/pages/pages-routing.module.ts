import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "user-manage",
        loadChildren: () =>
          import("./user-management/user-management.module").then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: "service-manage",
        loadChildren: () =>
          import("./service-management/service-management.module").then(
            (m) => m.ServiceManagementModule
          ),
      },
      {
        path:"message-archives",
        loadChildren:()=>import("./message-archives/message-archives.module").then(
          (m)=>m.MessageArchivesModule
        )
      },
      {
        path: "post-manage",
        loadChildren: () =>
          import("./post-management/post-management.module").then(
            (m) => m.PostManagementModule
          ),
      },
      
      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            (m) => m.MiscellaneousModule
          ),
      },
      {
        path: "",
        redirectTo: "user-manage",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
