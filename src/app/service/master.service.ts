import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  listarray = [{"name":"Rafi","mark":"10"}];

  GetData(){
    return this.listarray;
  }
  SaveData(input:any){
    this.listarray.push(input);
  }
}
