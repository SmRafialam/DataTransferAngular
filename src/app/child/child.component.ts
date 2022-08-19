import { MasterService } from './../service/master.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() namedata:any;
  @Input() markdata:any;
  @Input() objdata:any;
  channelname:any;
  @Output() dataupdateevent = new EventEmitter<string>();

  listarray = [{"name":"","mark":""}];

  constructor(private service:MasterService) { 
    this.listarray = this.service.GetData();
  }

  updatelist(obj:any){
    this.listarray.push(obj);
    return obj.name + " is added";
  }

  ngOnInit(): void {
    this.channelname = sessionStorage.getItem("name")!=null?sessionStorage.getItem("name"):"";
  }

}
