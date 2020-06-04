import { Component, OnInit } from "@angular/core";
import {
  Archive,
  ArchivesData,
  ArchiveCollection,
} from "../../../@core/data/archives";
import { tap, map } from "rxjs/operators";
import { concat } from "rxjs";
import { ServicesData } from "../../../@core/data/services";
import { services } from "../../../@core/data/services";
import { from, of, zip } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";
import { group } from "@angular/animations";
@Component({
  selector: "ngx-archives",
  templateUrl: "./archives.component.html",
  styleUrls: ["./archives.component.scss"],
})
export class ArchivesComponent implements OnInit {
  constructor(private service: ArchivesData, private service2: ServicesData) {
    this.getMessage();
    console.log(this.MessageArray);
  }
  arrayMessage: Archive[] = [];
  serviceName: services[];
  MessageArray = [];

  //  serviceData:ArchiveCollection[]=[];

  //  serviceData2:ArchiveCollection[]=[];
  //  apple2:Archive[];

  // getServices(){
  //   this.service2.getData().subscribe(recivedData=>{
  //     this.serviceName=recivedData;
  //     console.log(recivedData);
  //   })
  // }
  getMessage() {
    this.service.getMessages().subscribe((recivedData) => {
      this.MessageArray = recivedData;
        console.log(this.MessageArray);
      });
  }

  checkStatus() {
    this.getMessage();
    // this.getServices();
  }
  apple: Archive[] = [
    {
      service_name: "ONe",
      subpart: [
        {
          service_name: "Child 1",
          seen: true,
          message: "This is apple For Child1",
          time: "232345",
        },
        {
          service_name: "Child 2",
          seen: true,
          message: "This is apple for Child2",
          time: "383593",
        },
      ],
    },
    {
      service_name: "Two",
      subpart: [
        {
          service_name: "Child 1",
          seen: true,
          message: "This is apple For Child1",
          time: "232345",
        },
        {
          service_name: "Child 2",
          seen: true,
          message: "This is apple for Child2",
          time: "383593",
        },
      ],
    },
    {
      service_name: "Three",
      subpart: [
        {
          service_name: "Child 1",
          seen: true,
          message: "This is apple For Child1",
          time: "232345",
        },
        {
          service_name: "Child 2",
          seen: true,
          message: "This is apple for Child2",
          time: "383593",
        },
      ],
    },
  ];
  ngOnInit(): void {}
}
