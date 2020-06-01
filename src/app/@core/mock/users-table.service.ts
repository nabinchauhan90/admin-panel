import { UsersTableData, userData } from "../data/users-table";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable, OnInit } from "@angular/core";
@Injectable()
export class UsersTableService extends UsersTableData {
  constructor(private http: HttpClient) {
    super();
    this.getUsers();
  }
  data = [];
  getData() {
    return this.getUsers();
  }
  getUsers() {
    return this.http
      .get<{ [key: string]: userData }>(
        "https://weedon-f87f4.firebaseio.com/Users.json"
      )
      .pipe(
        map((data) => {
          console.log(data);
          const userArray: userData[] = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              userArray.push({ ...data[key], id: key });
            }
          }
          console.log(userArray);
          return userArray;
        })
      );
  }
  
  deleteUserbyId(id:string){
    return this.http.delete('https://weedon-f87f4.firebaseio.com/Users/'+id+'.json');
  }
  addUser(id:userData){
     return this.http.post('https://weedon-f87f4.firebaseio.com/Users.json',id);
  }
  editUserbyId(id:string,data:userData){
    return this.http.put('https://weedon-f87f4.firebaseio.com/Users/'+id+'.json',data);
  } 
}
