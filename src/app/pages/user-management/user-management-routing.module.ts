import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManangementComponent } from './user-management.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:'',
    component:UserManangementComponent, 
    children:[
      {
        path:'users',
        component:UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
