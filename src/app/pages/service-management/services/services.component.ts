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
  services: services[] = [
    {
      service_name: "Nepal",
      service_desc: "This is test",
      service_image:
        "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.0-9/79531819_727697744404391_3042197998013513728_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=TjD3Iw4dw_EAX9vf7Pa&_nc_ht=scontent.fbir1-1.fna&oh=cd358c84e49e3dbe75e1e94aaf3b3cc8&oe=5EF7FF82",
      service_email: "nc@gmail.com",
      service_password: "asfasf",
      service_thumbImage: "sdfasfd",
    },
    {
      service_name: "Nepal",
      service_desc: "This is test",
      service_image:
        "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.0-9/79531819_727697744404391_3042197998013513728_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=TjD3Iw4dw_EAX9vf7Pa&_nc_ht=scontent.fbir1-1.fna&oh=cd358c84e49e3dbe75e1e94aaf3b3cc8&oe=5EF7FF82",
      service_email: "nc@gmail.com",
      service_password: "asfasf",
      service_thumbImage: "sdfasfd",
    },
    {
      service_name: "Nepal",
      service_desc: "This is test",
      service_image:
        "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.0-9/79531819_727697744404391_3042197998013513728_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=TjD3Iw4dw_EAX9vf7Pa&_nc_ht=scontent.fbir1-1.fna&oh=cd358c84e49e3dbe75e1e94aaf3b3cc8&oe=5EF7FF82",
      service_email: "nc@gmail.com",
      service_password: "asfasf",
      service_thumbImage: "sdfasfd",
    },
  ];
  ngOnInit(): void {}
}
