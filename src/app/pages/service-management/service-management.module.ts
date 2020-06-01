import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManagementRoutingModule } from './service-management-routing.module';
import { ServicesComponent } from './services/services.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ServicesComponent, NewServiceComponent],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule,
    NbCardModule
  ]
})
export class ServiceManagementModule { }
