import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent  {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string = "http://127.0.0.1:8000/api/users/?format=json";

  param:any = {};

  dataList:Array<any> = [];

  pageList:Array<number>= [15, 25, 35];

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("用户列表");
  }

  onDataChanged($event){
    console.info($event)
    this.dataList = $event
  }
}