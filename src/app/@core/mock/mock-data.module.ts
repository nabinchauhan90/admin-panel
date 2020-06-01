import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersTableService } from './users-table.service';
import {ServicesService} from './services.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVICES = [
  UsersTableService,
  ServicesService,
  HttpClient
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
