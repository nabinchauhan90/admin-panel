import { Component, OnInit } from "@angular/core";
import { LocalDataSource, DefaultEditor } from "ng2-smart-table";
import { UsersTableData, userData } from "../../../@core/data/users-table";
import { UserData } from "../../../@core/data/users";

@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
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
    },
    mode: "external",
    columns: {
      name: {
        title: "Name",
        type: "string",
        editable: true,
        addable: true,
      },
      phone: {
        title: "Phone no.",
        type: "string",
        editable: true,
        addable: true,
      },
      id: {
        title: "ID",
        type: "number",
        editable: true,
        addable: true,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UsersTableData) {
    this.fetchData();
  }
  localData: userData = {
    name: "Apple",
    phone: 9032942,
    token_id: "sdajflashdfjlaksdhfkljashkdfhlkashfljh",
  };
  localData2: userData = {
    name: "Mango",
    phone: 903253354342,
    token_id: "sdajsafsflashdfjlaksdhfkljashkdfhlkashfljh",
  };
  //Basically using localData to Create&Edit Data. There is no way to alter the input field for edit & crate
  fetchData() {
    this.service.getData().subscribe((reicvedData) => {
      const data = reicvedData;
      this.source.load(data);
    });
  }
  onCreate(event) {
    if (window.confirm("Are you Sure you want to add?")) {
      this.service.addUser(this.localData).subscribe((data) => {
        console.log(data);
        this.fetchData();
      });
    } else {
    }
  }
  onEdit(event) {
    if (window.confirm("Are you usre you want to Edit?")) {
      this.service
        .editUserbyId(event.data.id, this.localData2)
        .subscribe((data) => {
          this.fetchData();
          console.log(data);
        });
    } else {
    }
  }
  onDelete(event) {
    if (window.confirm("Are you sure you want to Delete?")) {
      this.service.deleteUserbyId(event.data.id).subscribe((data) => {
        this.fetchData();
        console.log(data);
      });
    } else {
      console.log(event);
      console.log(event.data.id);
      console.log(event.data.name);
    }
  }
}
