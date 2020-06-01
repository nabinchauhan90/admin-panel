import { Component, OnInit } from "@angular/core";
import { ServicesData, services } from "../../../@core/data/services";
@Component({
  selector: "ngx-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  constructor(private service: ServicesData) {
    this.service.getData().subscribe(recivedServices=>{
      this.services=recivedServices;
      console.log(this.services);
    }) 
    console.log(this.services);
  }
  services: services[] = [];
  ngOnInit(): void {}
}
