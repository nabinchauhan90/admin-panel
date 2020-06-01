import { ServicesData, services } from "../data/services";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
@Injectable()
export class ServicesService extends ServicesData {
  data: services[];
  constructor(private http: HttpClient) {
    super();
  }
  getData() {
    return this.getServices();
    //return this.data;
  }
  getServices() {
   return this.http
      .get<{ [key: string]: services }>(
        "https://weedon-f87f4.firebaseio.com/all_services.json"
      )
      .pipe(
        map((recivedData) => {
          let postArray:services[] = [];
          for (const key in recivedData) {
            if (recivedData.hasOwnProperty(key)) {
              postArray.push({ ...recivedData[key], id: key });
            }
          }
          return postArray;
        })
      )
  }
}
