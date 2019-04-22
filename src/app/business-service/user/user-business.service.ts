import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserBusinessService {

  constructor() { }

  
  /**
   * 登录
   */
  login(){
    return environment.domain + "/api/login";
  }

  logout(){
    return environment.domain + "/api/logout";
  }

  user(id: number){
    return environment.domain + "/api/user/" + id;
  }

  role(id: number){
    return environment.domain + "/api/group/" + id;
  }

}
