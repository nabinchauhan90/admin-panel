import { Observable } from 'rxjs';
export interface userData {
    name:string;
    phone:number;
    token_id?:string;
    id?:string;
}
export abstract class UsersTableData {
    abstract getData():Observable<userData[]>;
    abstract deleteUserbyId(id:string):Observable<Object>;
    abstract addUser(id:userData):Observable<Object>;
    abstract editUserbyId(id:string,data:userData):Observable<Object>;
}