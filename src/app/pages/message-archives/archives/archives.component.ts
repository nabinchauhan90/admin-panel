import { Component, OnInit } from '@angular/core';
import { Archive } from '../../../@core/data/archives';

@Component({
  selector: 'ngx-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor() { }
  apple:Archive[]=[
    {service_name:'ONe',seen:true,message:'1st This is A test Message',time:'341423424'},
    {service_name:'Two',seen:true,message:'2nd This is A test Message',time:'341423424'},
    {service_name:'Three',seen:true,message:'3rdThis is A test Message',time:'341423424'},
    {service_name:'Four',seen:true,message:'4th  This is A test Message',time:'341423424'}
  ]
  ngOnInit(): void {
  }

}
