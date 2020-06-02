import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageArchivesRoutingModule } from './message-archives-routing.module';
import { ArchivesComponent } from './archives/archives.component';
import { NbCardModule, NbListModule, NbAccordionModule, NbTreeGridModule } from '@nebular/theme';


@NgModule({
  declarations: [ArchivesComponent],
  imports: [
    CommonModule,
    MessageArchivesRoutingModule,
    NbCardModule,
    NbListModule,
    NbAccordionModule,
    NbTreeGridModule
  ]
})
export class MessageArchivesModule { }
