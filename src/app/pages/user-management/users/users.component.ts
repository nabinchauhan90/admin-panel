import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableData, userData } from "../../../@core/data/users-table";
import { UserData } from '../../../@core/data/users';

@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    mode: "external",
    columns: {
      name: {
        title: "Name",
        type: "string",
      },
      phone: {
        title: "Phone no.",
        type: "string",
      },
      id: {
        title: "ID",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UsersTableData) {
    this.service.getData().subscribe((reicvedData) => {
      const data = reicvedData;
      this.source.load(data);
    });
  }
  onCreate(event) {
    console.log(event);
    console.log(event.data);
  }
  onEdit(event) {
    console.log(event.data);
  }
  onDelete(event:userData) {
    this.service.deleteUserbyId(event.id).subscribe(data=>{
      console.log(data);
    })
  }
  onCheck() {
    console.log(this.service.getData());
  }
  ngOnInit(): void {}
}
