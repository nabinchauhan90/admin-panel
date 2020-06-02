import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessageArchivesComponent } from "./message-archives.component";
import { ArchivesComponent } from "./archives/archives.component";

const routes: Routes = [
  {
    path: "",
    component: MessageArchivesComponent,
    children: [{ path: "archives", component: ArchivesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageArchivesRoutingModule {}
