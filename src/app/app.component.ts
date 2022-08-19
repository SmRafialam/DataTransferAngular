import { MasterService } from './service/master.service';
import { ChildComponent } from './child/child.component';
import { Component,ViewChild,Output,EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:MasterService){
    sessionStorage.setItem("name","Bangla Desh");
  }

  @ViewChild(ChildComponent) view !: ChildComponent
  title = 'Parent Component';
  inputname = '';
  inputmark = '';
  inputobj = {"name":"","mark":""};
  response:any;

  TransferData(name:any,mark:any){
    // this.inputname = name;
    // this.inputmark = mark;
    this.inputobj = {"name":name,"mark":mark};
    // this.response = this.view.updatelist(this.inputobj);
    this.service.SaveData(this.inputobj);
  }
  responseData(){
    $("span").click(function(){
      $(".responsebtn").fadeOut(1000);
    });
    $(".btn").click(function(){
      $(".responsebtn").fadeIn(1000);
    });
  }
  updateTitle(title:any){
    this.title = title;
  
  }
}
