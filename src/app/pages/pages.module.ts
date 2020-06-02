import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UserManangementComponent } from './user-management/user-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { MessageArchivesComponent } from './message-archives/message-archives.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    UserManangementComponent,
    ServiceManagementComponent,
    MessageArchivesComponent,
  ],
})
export class PagesModule {
}
